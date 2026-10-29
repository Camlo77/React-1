import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1>Esta zona no existe en el mapa de Hyrule :c</h1>
      <p>La ruta que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;