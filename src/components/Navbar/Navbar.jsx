import React from 'react';
import './navbar.css';

export default function Navbar() {
    const total = 25000;
    const totalFormateado = total.toLocaleString('es-ES');
    const token = false;

    const templateLogIn = (
        <div className="navbar">
            <div className="btn">
                <p>Pizzería Mamma Mia!</p>
                <button className="btns">🍕 Home</button>
                <button className="btns">🔓 Profile</button>
                <button className="btns">🔒 Logout</button>
            </div>
                <button className="btn-compra">🛒 Total: ${totalFormateado}</button>
        </div>
    );

    const templateLogOut = (
        <div className="navbar">
            <div className="btn">
                <p>Pizzería Mamma Mia!</p>
                <button className="btns">🍕 Home</button>
                <button className="btns">🔐 Login</button>
                <button className="btns">🔐 Register</button>
            </div>
            <button className="btn-compra">🛒 Total: ${totalFormateado}</button>
        </div>
    );

    return token ? templateLogIn : templateLogOut;
}
