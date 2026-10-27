// import Header from "./Header";
// import CardJuego from "./CardJuego";
// import juego1 from '../assets/Juego1.jpg'
// import juego2 from '../assets/Juego2.jpg'
// import juego3 from '../assets/Juego3.jpg'
// import './Home.css'
//
// function Home() {
//   return (
//     <>
//       <Header />
//       <div className="games-grid">
//         <CardJuego
//           imagen={juego1}
//           nombre="The Legend of Zelda: Breath of the Wild"
//           caracteristicas={["Mundo abierto", "Acción", "Aventura"]}
//           precio={39990}
//         />
//         <CardJuego
//           imagen={juego2}
//           nombre="The Legend of Zelda: Tears of the Kingdom"
//           caracteristicas={["Construcción", "Exploración", "Aventura"]}
//           precio={44990}
//         />
//         <CardJuego
//           imagen={juego3}
//           nombre="The Legend of Zelda: Ocarina of Time"
//           caracteristicas={["Clásico", "Aventura", "Puzzles"]}
//           precio={24990}
//         />
//       </div>
//     </>
//   )
// }
//
// export default Home

// ---------- CÓDIGO NUEVO (hito 4) ----------
import { useState, useEffect } from "react";
import CardZelda from "./CardZelda";

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