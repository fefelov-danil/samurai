import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "components/redux/types";
import {Dispatch} from "redux";
import {DispatchType} from "components/redux/store";

type ProfilePostType = {
    profilePage: ProfilePageType
    dispatch: Dispatch<DispatchType>
    newPostText: string
}

export const Profile: React.FC<ProfilePostType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <Posts
                postData={props.profilePage.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}/>
        </>
    )
}