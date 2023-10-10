import "./Navbar.css"; // Asegúrate de tener la ruta correcta al archivo CSS

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="text-white text-2xl font-extrabold">Pokemon</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-3 py-2 rounded-md"
          />
          <button>Buscar</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
