import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Posts} from "components/content/profile/posts/Posts";

export const Profile = () => {
    return (
        <>
            <ProfileInfo/>
            <Posts />
        </>
    )
}