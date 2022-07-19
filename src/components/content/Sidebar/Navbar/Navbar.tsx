import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className="sidebar-el navbar">
            <div className="item">
                <NavLink to="/profile">Профиль</NavLink>
            </div>
            <div className="item">
                <NavLink to="/messages">Сообщения</NavLink>
            </div>
            <div className="item">
                <NavLink to="/news">Новости</NavLink>
            </div>
            <div className="item">
                <NavLink to="/music">Музыка</NavLink>
            </div>
            <div className="item">
                <NavLink to="/settings">Настройки</NavLink>
            </div>
        </nav>
    )
}