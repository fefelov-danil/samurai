import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {StoreType} from "components/redux/store";

type ProfilePostType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePostType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <Posts
                store={props.store}/>
        </>
    )
}