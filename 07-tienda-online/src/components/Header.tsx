import { Link } from "react-router-dom";
import SliderSwipper from "./SliderSwipper";
import Minicart from "./MiniCart";
import Login from "./Login";

function Header() {
  return (
    <header>
      <SliderSwipper />
      <div className="store-topbar-container">
        <div className="store-topbar__logo">
          <h3>Tienda online</h3>
        </div>
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
        <div className="store-topbar__user">
          <Login />
          <Minicart />
        </div>
      </div>
    </header>
  );
}

export default Header;
