import React from 'react';
import {ProfileInfo} from "features/profile/profileInfo/ProfileInfo";
import {Posts} from "features/profile/posts/Posts";

export const Profile = () => {
    return (
        <>
            <ProfileInfo/>
            <Posts />
        </>
    )
}