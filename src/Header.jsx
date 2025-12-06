import "./Header.css";
import appLogo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={appLogo} style={{ width: "74px", height: "40px" }}></img>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#">Servicios</a>
          </li>
          <li className="nav-item">
            <a href="#">Fundación</a>
          </li>
          <li className="nav-item">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
