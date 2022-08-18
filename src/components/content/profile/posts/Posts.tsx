import React from 'react';
import s from './Posts.module.css'
import {Post} from "./post/Post";
import {SendPost} from "./sendPost/SendPost";
import {PostsType, StoreType} from "components/redux/state";

type PostsPropsType = {
    postData: Array<PostsType>
    newPostText: string
    Store: StoreType
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    return (
        <div className={s.posts}>
            <SendPost Store={props.Store} newPostText={props.newPostText}/>
            {
                props.postData.map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
            }
        </div>
    )
}