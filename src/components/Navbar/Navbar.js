import { FaShoppingCart } from "react-icons/fa";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const Navbar = () => {
    return (
        <nav>
            <Icon className="navbar-icon"/>
            <ul className="navbar-list">
                <li>
                    <Button name="Inicio" callback={() => console.log("Inicio")} />
                </li>
                <li>
                    <Button name="Productos" callback={() => console.log("Productos")} />
                </li>
                <li>
                    <Button name="Contacto" callback={() => console.log("Contacto")} />
                </li>
                <li className="navbar-cart"> {/* agregamos una clase y un elemento nuevo */}
                    <a href="/carrito">
                        <FaShoppingCart/> {/* agregamos el icono dentro del enlace */}
                        <span className="cart-counter">0</span> {/* añadimos un contador */}
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;