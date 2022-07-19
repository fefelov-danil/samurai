import React from 'react';
import './Profile.css'
import {Posts} from "./Posts/Posts";
import {Profile_info} from "./Profile-info/Profile_info";
import {StateType} from "../../redux/State";

export function Profile(props: { profilePage: StateType["profilePage"] }) {
    return (
        <>
            <Profile_info/>
            <Posts postData={props.profilePage.postData}/>
        </>
    )
}