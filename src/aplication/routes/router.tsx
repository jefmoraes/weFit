import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ShoppingCart from "../pages/shoppingCart";
import FinishOrder from "../pages/finishOrder";
import Home from "../pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />

        <Route path="/shopping-cart/finish" element={<FinishOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
