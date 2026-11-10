import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
const Cart = () => {
  const { cart, increase, decrease, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container my-4">
      <h2>Detalles del pedido</h2>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

      {cart.map((item) => (
        <div key={item.id} className="d-flex align-items-center gap-3 mb-3">
          <img src={item.img} alt={item.name} width="80" />
          <span className="flex-grow-1">{item.name}</span>
          <span>${item.price.toLocaleString("es-CL")}</span>
          <button
            className="btn btn-outline-danger"
            onClick={() => decrease(item.id)}
          >
            -
          </button>
          <span>{item.count}</span>
          <button
            className="btn btn-outline-primary"
            onClick={() => increase(item.id)}
          >
            +
          </button>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString("es-CL")}</h3>
      <button className="btn btn-dark" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;