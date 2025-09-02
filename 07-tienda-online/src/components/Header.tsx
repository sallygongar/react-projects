import { Link } from "react-router-dom";
import SliderSwipper from "./SliderSwipper";

function Header() {
  return (
    <header>
      <SliderSwipper />
      <nav className="store-navbar-menu">
        <Link to="/" className="store-navbar-link">
          Inicio
        </Link>
        <Link to="/nike" className="store-navbar-link">
          Nike
        </Link>
        <Link to="/mujer" className="store-navbar-link">
          Mujer
        </Link>
        <Link to="/hombre" className="store-navbar-link">
          Hombre
        </Link>
      </nav>
    </header>
  );
}

export default Header;
