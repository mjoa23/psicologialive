import "./Header.css";
import appLogo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={appLogo}></img>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item real">
            <a href="#">Inicio</a>
          </li>
          <li className="nav-item real">
            <a href="#">Servicios</a>
          </li>
          <li className="nav-item real">
            <a href="#">Fundación</a>
          </li>
          <li className="nav-item real">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="social-buttons nav-item">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-facebook"
        ></a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-instagram"
        ></a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-linkedin"
        ></a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-whatsapp"
        ></a>
      </div>
    </header>
  );
}

export default Header;
