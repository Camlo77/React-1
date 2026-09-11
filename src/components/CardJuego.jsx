function CardJuego({ imagen, nombre, caracteristicas, precio }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{caracteristicas.join(', ')}</p>
        <p className="card-text fw-bold">${precio.toLocaleString('es-CL')}</p>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">Ver más</button>
          <button className="btn btn-success btn-sm">Añadir</button>
        </div>
      </div>
    </div>
  );
}

export default CardJuego