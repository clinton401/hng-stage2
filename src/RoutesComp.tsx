import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
function RouteComp() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
  </Routes>;
}

export default RouteComp;
