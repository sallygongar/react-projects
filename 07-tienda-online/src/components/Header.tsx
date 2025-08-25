import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Mi Tienda</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/nike">Nike</Link>
        <Link to="/mujer">Mujer</Link>
        <Link to="/hombre">Hombre</Link>
      </nav>
    </header>
  );
}

export default Header;
