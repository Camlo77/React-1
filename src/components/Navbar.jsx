import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { total } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Zelda Store
        </Link>

        <div className="d-flex align-items-center gap-2">
          <Link className="btn btn-outline-secondary" to="/">
            Home
          </Link>
          <Link className="btn btn-outline-secondary" to="/login">
            <i className="fa-solid fa-lock-open"></i> Login
          </Link>
          <Link className="btn btn-outline-secondary" to="/register">
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Register
          </Link>
          <Link className="btn btn-outline-secondary" to="/profile">
            <i className="fa-solid fa-user-lock"></i> Perfil
          </Link>
        </div>

        <Link className="btn btn-outline-success ms-auto" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i> Total: $
          {total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
