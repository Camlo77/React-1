import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [token, setToken] = useState(false);
  const total = 15000;

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Zelda Store
        </a>

        <div className="d-flex align-items-center gap-2">
          <a className="btn btn-outline-secondary" href="#">
            Home
          </a>

          {token ? (
            <>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setToken(false)}
              >
                <i class="fa-solid fa-lock"></i> Logout
              </button>
              <a className="btn btn-outline-secondary" href="#">
                <i class="fa-solid fa-user-lock"></i> Perfil
              </a>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setToken(true)}
              >
                <i class="fa-solid fa-lock-open"></i> Login
              </button>
              <a className="btn btn-outline-secondary" href="#">
                <i class="fa-solid fa-arrow-right-to-bracket"></i> Register
              </a>
            </>
          )}
        </div>

        <button className="btn btn-outline-success ms-auto" type="button">
          <i class="fa-solid fa-cart-shopping"></i> Total: $
          {total.toLocaleString("es-CL")}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
