import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"

const CartWidget = () => {
    return <li to="cart" className="navbar-cart">
        <div className="cart-icon">
            <Link to={"/carrito"}>
                <FaShoppingCart/>
                <span className="cart-counter">0</span>
            </Link>
        </div>
    </li>
}

export default CartWidget