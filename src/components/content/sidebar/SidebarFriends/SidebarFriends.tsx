import React from 'react';
import s from "./SidebarFriends.module.css"
import {SidebarFriendsType, StateType} from "components/redux/State";

export const SidebarFriends: React.FC<{sidebarFriends: SidebarFriendsType[]}> = (props) => {
    return (
        <div className={`${s.sidebarEl} ${s.sidebarFriends}`}>
            <h3>Друзья</h3>
            <ul>
                {
                    props.sidebarFriends.map(f => {
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