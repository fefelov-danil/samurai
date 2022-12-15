import React from 'react';
import s from "features/sidebar/Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";
import {PATHS} from "common/routes/Pages";

export const Navbar = () => {
  return (
    <nav className={`${s.sidebarEl} ${s.navbar}`}>
      <div className={s.item}>
        <NavLink to={PATHS.PROFILE}>Профиль</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={PATHS.MESSAGES}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={PATHS.NEWS}>Новости</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={PATHS.MUSIC}>Музыка</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={PATHS.USERS}>Пользователи</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={PATHS.SETTINGS}>Настройки</NavLink>
      </div>
    </nav>
  )
}