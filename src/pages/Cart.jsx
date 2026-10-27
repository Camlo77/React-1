const Cart = ({ cart, setCart, total }) => {
  const increase = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );

  const decrease = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item
      )
    );

  return (
    <div className="container my-4" style={{ maxWidth: 700 }}>
      <h4 className="mb-3">Detalles del pedido:</h4>
      {cart.length === 0 && <p>Tu carrito está vacío.</p>}
      {cart.map((item) => (
        <div
          className="d-flex align-items-center border-bottom py-2"
          key={item.id}
        >
          <img
            src={item.img}
            alt={item.name}
            width="80"
            className="rounded me-3"
          />
          <span className="flex-grow-1">{item.name}</span>
          <span className="me-3 fw-bold">
            ${item.price.toLocaleString("es-CL")}
          </span>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => decrease(item.id)}
            disabled={item.count === 0}
          >
            −
          </button>
          <span className="mx-2 fw-bold">{item.count}</span>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => increase(item.id)}
          >
            +
          </button>
        </div>
      ))}
      <h3 className="mt-4">Total: ${total.toLocaleString("es-CL")}</h3>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;