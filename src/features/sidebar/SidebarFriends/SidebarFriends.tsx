import React from 'react';
import s from "features/sidebar/SidebarFriends/SidebarFriends.module.css"
import {useAppSelector} from "utils/hooks";

export const SidebarFriends = () => {
  const sidebarFriends = useAppSelector(state => state.sidebar.sidebarFriends)

  return (
    <div className={`${s.sidebarEl} ${s.sidebarFriends}`}>
      <h3>Друзья</h3>
      <ul>
        {
          sidebarFriends.map(f => {
            return (
              <li className={s.sidebarFriend} key={f.id}>
                <img src={f.imgSrc} alt="" className={s.ava}/><br/>
                <span className={s.name}>{f.friend}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};