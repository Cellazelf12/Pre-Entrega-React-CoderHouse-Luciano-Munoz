import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css'

function DropdownList() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Productos
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <li>
                    <Link
                        to="/"
                    >
                        <span>---</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/category/Consolas"
                    >
                        <span>Consolas</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/category/Accesorios"
                    >
                        <span>Accesorios</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/category/Juegos"
                    >
                        <span>Juegos</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default DropdownList;
