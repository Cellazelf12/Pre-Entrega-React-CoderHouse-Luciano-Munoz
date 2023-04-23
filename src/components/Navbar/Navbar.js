import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import CartWidget from "../CartWidget/CartWidget";
import Productos from "../Productos/Productos";
import { Link } from 'react-router-dom'
import "../../App.css"

const Navbar = () => {
  return (
    <nav>
      <Icon className="navbar-icon" />
      <ul className="navbar-list">
        <li>
          <Link to={'/'}>
            <Button label="Inicio" callback={() => console.log("Inicio")} />
          </Link>
        </li>
        <li>
          <Productos />
        </li>
        <li>
          <Link to="about">

            <Button label="Acerca De" callback={() => console.log("Contacto")} />
          </Link>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default Navbar;