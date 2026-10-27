import { useState } from "react";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import Register from "./components/Register";
import { zeldasCart } from "./components/zeldas";
import Pizza from "./pages/Pizza";

function App() {
  const [cart, setCart] = useState(zeldasCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <>
      <Navbar total={total} />
      <Pizza/>
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart cart={cart} setCart={setCart} total={total} />
      <Footer />
    </>
  );
}
export default App;