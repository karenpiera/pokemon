import "./Navbar.css"; // Asegúrate de tener la ruta correcta al archivo CSS
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="text-white text-2xl font-extrabold">Pokemon</div>
        <Link to="/home" className="button animated-link">
          Home
        </Link>
        <Link to="/" className="button animated-link">
          Landing
        </Link>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-3 py-2 rounded-md"
          />
          <button className="butto">Buscar</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
