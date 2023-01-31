import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Products from "./Products";

function App() {
  const [products, setProducts] = useState([
    { id: 0, title: "Product 1", description: "Description", reviews: [] },
    { id: 1, title: "Product 2", description: "Description", reviews: [] },
    { id: 2, title: "Product 3", description: "Description", reviews: [] },
    { id: 3, title: "Product 4", description: "Description", reviews: [] },
    { id: 4, title: "Product 5", description: "Description", reviews: [] },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
