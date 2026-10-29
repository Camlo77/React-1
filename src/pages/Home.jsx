import { useState, useEffect } from "react";
import CardZelda from "../pages/CardZelda";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar pizzas:", error);
      }
    };
    getPizzas();
  }, []);

  return (
    <div className="container my-4">
      <div className="row g-4">
        {pizzas.map((pizza) => (
          <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
            <CardZelda
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;