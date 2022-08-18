import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType, StoreType} from "components/redux/state";

type ProfilePostType = {
    profilePage: ProfilePageType
    newPostText: string
    Store: StoreType
}

export const Profile: React.FC<ProfilePostType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <Posts
                postData={props.profilePage.posts}
                newPostText={props.newPostText}
                Store={props.Store}/>
        </>
    )
}