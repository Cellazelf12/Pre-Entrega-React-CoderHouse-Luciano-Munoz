import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import CartWidget from "../CartWidget/CartWidget";
import Productos from "../Productos/Productos";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Icon className="navbar-icon" />
            <ul className="navbar-list">
                <li>
                    <Link to={'/'}>
                        <Button name="Inicio" callback={() => console.log("Inicio")} />
                    </Link>
                </li>
                <li>
                    <Productos/>
                </li>
                <li>
                    <Button name="Contacto" callback={() => console.log("Contacto")} />
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}

export default Navbar;