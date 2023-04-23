import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button className="item-count__button" onClick={decrement}>
          -
        </button>
        <h4 className="item-count__number">{quantity}</h4>
        <button className="item-count__button" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="item-count__add-button"
        onClick={() => onAdd(quantity)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
