import Header from "./Header";
import CardJuego from "./CardJuego";
import juego1 from '../assets/Juego1.jpg'
import juego2 from '../assets/Juego2.jpg'
import juego3 from '../assets/Juego3.jpg'
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <div className="games-grid">
        <CardJuego
          imagen={juego1}
          nombre="The Legend of Zelda: Breath of the Wild"
          caracteristicas={["Mundo abierto", "Acción", "Aventura"]}
          precio={39990}
        />
        <CardJuego
          imagen={juego2}
          nombre="The Legend of Zelda: Tears of the Kingdom"
          caracteristicas={["Construcción", "Exploración", "Aventura"]}
          precio={44990}
        />
        <CardJuego
          imagen={juego3}
          nombre="The Legend of Zelda: Ocarina of Time"
          caracteristicas={["Clásico", "Aventura", "Puzzles"]}
          precio={24990}
        />
      </div>
    </>
  )
}

export default Home