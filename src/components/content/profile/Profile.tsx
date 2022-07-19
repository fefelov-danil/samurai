import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "components/redux/State";

export const Profile: React.FC<{ profilePage: ProfilePageType }> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <Posts postData={props.profilePage.posts}/>
        </>
    )
}