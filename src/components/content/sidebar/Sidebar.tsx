import React from 'react';
import s from "./Sidebar.module.css";
import {Navbar} from "./Navbar/Navbar";
import {SidebarFriends} from "./SidebarFriends/SidebarFriends";
import {SidebarType} from "components/redux/state";

export const Sidebar: React.FC<{sidebar: SidebarType}> = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
            <SidebarFriends sidebarFriends={props.sidebar.sidebarFriends}/>
        </div>
    );
};