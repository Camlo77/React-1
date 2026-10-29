import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { zeldasCart } from "./components/zeldas";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound.jsx";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  const [cart, setCart] = useState(zeldasCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <>
      <Navbar total={total} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} total={total} />}
        />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;