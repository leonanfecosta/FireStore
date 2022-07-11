import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import { fetchAllProducts } from "./redux/reducers/fetchProducts";
import "./index.css";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
        <Route exact path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
