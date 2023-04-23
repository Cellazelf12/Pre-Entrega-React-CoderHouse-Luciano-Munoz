import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
    return (
        <div className="card">
            <img src={img} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary">
                    Ver detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;
