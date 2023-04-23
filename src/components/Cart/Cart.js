import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, total } = useCart();

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>
      <div>
        {cart.map((prod) => {
          return (
            <div key={prod.id} className="cart-item">
              <img src={prod.img} alt={prod.name} />
              <div className="cart-item-info">
                <h2>{prod.name}</h2>
                <h2>Cantidad: {prod.quantity}</h2>
                <h2>${prod.price} x Unidad</h2>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="cart-total">Total de la compra ${total}</h1>
      <Link to="/checkout" className="checkout-button">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
