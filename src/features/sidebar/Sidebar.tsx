import React from 'react';
import s from "features/sidebar/Sidebar.module.css";
import {Navbar} from "features/sidebar/Navbar/Navbar";
import {SidebarFriends} from "features/sidebar/SidebarFriends/SidebarFriends";

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
            <SidebarFriends/>
        </div>
    );
};