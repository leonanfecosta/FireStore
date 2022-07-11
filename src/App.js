import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import { fetchAllProducts } from "./redux/reducers/fetchProducts";
import "./index.css";

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
      </Routes>
    </div>
  );
}

export default App;
