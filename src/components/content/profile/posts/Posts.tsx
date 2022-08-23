import React from 'react';
import s from './Posts.module.css'
import {Post} from "./post/Post";
import {PostsType} from "components/redux/types";
import {Dispatch} from "redux";
import {DispatchType, StoreType} from "components/redux/store";
import {SendPostContainer} from "components/content/profile/posts/sendPost/SendPostContainer";

type PostsPropsType = {
    store: StoreType
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    return (
        <div className={s.posts}>
            <SendPostContainer
                store={props.store}/>
            {
                props.store.getState().profile.posts.map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
            }
        </div>
    )
}