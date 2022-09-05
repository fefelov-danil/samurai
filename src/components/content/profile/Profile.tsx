import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsContainer} from "components/content/profile/posts/PostsContainer";

export const Profile = () => {
    return (
        <>
            <ProfileInfo/>
            <PostsContainer />
        </>
    )
}