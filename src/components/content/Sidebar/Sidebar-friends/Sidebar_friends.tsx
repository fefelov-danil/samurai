import React from 'react';
import "./Sidebar_friends.css"
import {StateType} from "../../../redux/State";

export const SidebarFriends = (props: StateType["sidebar"]) => {
    return (
        <div className="sidebar-el sidebar-friends">
            <h3>Друзья</h3>
            <ul>
                {
                    props.sidebarFriends.map(f => {
                        return (
                            <li className="sidebar-friend" key={f.id}>
                                <img src={f.imgSrc} alt="" className="ava"/><br/>
                                <span className="name">{f.friend}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};