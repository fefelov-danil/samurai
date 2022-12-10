import React from 'react';
import s from "./Sidebar.module.css";
import {Navbar} from "./Navbar/Navbar";
import {SidebarFriends} from "./SidebarFriends/SidebarFriends";

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
            <SidebarFriends/>
        </div>
    );
};