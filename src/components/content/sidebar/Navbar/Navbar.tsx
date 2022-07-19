import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={`${s.sidebarEl} ${s.navbar}`}>
            <div className={s.item}>
                <NavLink to="/profile">Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages">Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Настройки</NavLink>
            </div>
        </nav>
    )
}