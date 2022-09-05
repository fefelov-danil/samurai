import React from 'react';
import s from './Posts.module.css'
import {Post} from "./post/Post";
import {SendPostContainer} from "components/content/profile/posts/sendPost/SendPostContainer";
import {PostsType} from "components/redux/types";

type PostsPropsType = {
    posts: Array<PostsType>
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    return (
        <div className={s.posts}>
            <SendPostContainer/>
            {
                props.posts.map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
            }
        </div>
    )
}