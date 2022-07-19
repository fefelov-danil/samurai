import React from 'react';
import "./Sidebar.css";
import {Navbar} from "./Navbar/Navbar";
import {SidebarFriends} from "./Sidebar-friends/Sidebar_friends";
import {StateType} from "../../redux/State";

export const Sidebar = (props: {sidebar: StateType["sidebar"]}) => {
    return (
        <div className="sidebar">
            <Navbar/>
            <SidebarFriends sidebarFriends={props.sidebar.sidebarFriends}/>
        </div>
    );
};