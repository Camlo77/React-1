import { useState, useEffect } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };
    getPizza();
  }, []);

  if (!pizza) return <p className="text-center my-5">Cargando...</p>;

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              className="img-fluid rounded-start w-100 h-100"
              style={{ objectFit: "cover" }}
              alt={pizza.name}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title text-capitalize">{pizza.name}</h2>
              <hr />
              <p className="card-text">{pizza.desc}</p>
              <p className="mb-1 fw-bold">Ingredientes:</p>
              <ul className="text-capitalize">
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <hr />
              <h4>Precio: ${pizza.price.toLocaleString("es-CL")}</h4>
              <button className="btn btn-dark mt-2">Añadir al carro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
