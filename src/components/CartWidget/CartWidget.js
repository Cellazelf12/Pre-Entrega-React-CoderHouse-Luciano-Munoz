import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import Swal from 'sweetalert2';
import "../../App.css"

const CartWidget = () => {

    const { totalQuantity } = useCart()

    const handleClick = () => {
        if (totalQuantity <= 0) {
            Swal.fire({
                icon: 'warning',
                text: 'El carrito está vacío',
                showConfirmButton: true,
                timer: 2000
            });
        }
    };

    return (
        <li className="navbar-cart">
            <div className="cart-icon">
                {totalQuantity > 0 ? (
                    <Link to={"/cart"}>
                        <FaShoppingCart />
                        <span className="cart-counter">{totalQuantity}</span>
                    </Link>
                ) : (
                    <button onClick={handleClick}>
                        <FaShoppingCart/>
                        <span className="cart-counter">{totalQuantity}</span>
                    </button>
                )}
            </div>
        </li>
    );
}

export default CartWidget;
