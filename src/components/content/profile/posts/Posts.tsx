import React from 'react';
import s from './Posts.module.css'
import {Post} from "./post/Post";
import {SendPost} from "./sendPost/SendPost";
import {PostsType, StateType} from "../../../redux/State";

export const Posts: React.FC<{postData: Array<PostsType>}> = (props) => {
    return (
        <div className={s.posts}>
            <SendPost/>
            {
                props.postData.map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
            }
        </div>
    )
}