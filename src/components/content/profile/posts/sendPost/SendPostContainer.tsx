import React from 'react';
import {addPostAC, postTextareaOnChangeAC} from "components/redux/profile-reducer";
import {StoreType} from "components/redux/store";
import {SendPost} from "components/content/profile/posts/sendPost/SendPost";

type SendPostType = {
    store: StoreType
}

export const SendPostContainer: React.FC<SendPostType> = (props) => {

    const onChangeTextPost = (value: string) => {
        props.store.dispatch(postTextareaOnChangeAC(value))
    }
    const onClickAddPost = () => {
        props.store.dispatch(addPostAC())
        props.store.dispatch(postTextareaOnChangeAC(''))
    }

    return (
        <SendPost
            onChangeTextPost={onChangeTextPost}
            onClickAddPost={onClickAddPost}
            postText={props.store.getState().profile.newPostText}
        />
    )
}