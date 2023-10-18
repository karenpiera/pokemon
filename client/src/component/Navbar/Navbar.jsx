import "./Navbar.css"; // Asegúrate de tener la ruta correcta al archivo CSS
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function refreshPage() {
  window.location.reload(false);
}

function Navbar({ handleChange, handleSubmit }) {
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
        <div className="refresh-container">
          <span onClick={refreshPage} className="refresh-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" />
            </svg>
          </span>
        </div>

        <div className="search-box">
          <form onChange={handleChange}>
            <input placeholder="Search" type="search" />
            <button type="submit" onClick={handleSubmit}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
