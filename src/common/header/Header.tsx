import React from 'react';
import s from 'common/header/Header.module.css'
import defaultAva from 'assets/images/ava.jpg'
import logo from 'assets/images/logo.png';
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {NavLink} from "react-router-dom";
import {PATHS} from "common/routes/Pages";
import {FiLogOut} from "react-icons/fi";
import {logout} from "redux/reducers/profile-reducer";


export const Header = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(state => state.profile.profileData)

  const name = profile.fullName ? profile.fullName : ''
  const img = profile.photos?.small ? profile.photos.small : defaultAva

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className={s.header}>
      <NavLink className={s.logo} to={PATHS.NEWS}>
        <img src={logo} alt="logo"/>
      </NavLink>
      <div className={s.me}>
        <NavLink to={PATHS.PROFILE}>
          <img src={img} alt="me"/>
        </NavLink>
        <div className={s.info}>
          <NavLink className={s.name} to={PATHS.PROFILE}>
            {name}
          </NavLink><br />
          <button className={s.logout} onClick={logoutHandler}>logout <FiLogOut/></button>
        </div>
      </div>
    </header>
  )
}