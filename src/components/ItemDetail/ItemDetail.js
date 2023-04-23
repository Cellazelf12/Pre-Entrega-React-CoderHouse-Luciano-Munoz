import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import swal from "sweetalert2";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, img
        }
        addItem(productToAdd)
        swal.fire({
            title: "Producto agregado al carrito",
            text: `Se agregaron ${quantity} ${name} al carrito.`,
            icon: "success",
            buttons: false,
            timer: 2000,
        });
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail-image-container">
                <img src={img} alt={name} className="item-detail-image"/>
            </div>
            <div className="item-detail-info-container">
                <h2 className="item-detail-name">{name}</h2>
                <p className="item-detail-category">Categoría: {category}</p>
                <p className="item-detail-description">{description}</p>
                <p className="item-detail-price">Precio: ${price}</p>
                <div className='item-detail-button-container'>
                    {
                        isInCart(id) ? (
                            <Link to='/cart' className='item-detail-button'>Terminar compra</Link>
                        ) : (
                            <ItemCount onAdd={handleOnAdd} stock={stock} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
