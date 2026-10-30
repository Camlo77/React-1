const CardZelda = ({ name, price, ingredients, img, desc, onAdd }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text small">{desc}</p>
        <p className="mb-1 fw-bold">Objetos clave:</p>
        <ul className="list-unstyled text-capitalize">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <h5>Precio: ${price.toLocaleString("es-CL")}</h5>
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-dark">
            <i className="fa-solid fa-eye"></i> Ver más
          </button>
          <button className="btn btn-dark" onClick={onAdd}> Añadir +</button>
        </div>
      </div>
    </div>
  );
};

export default CardZelda;
