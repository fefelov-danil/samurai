import React from 'react';
import s from './Posts.module.css'
import {Post} from "./post/Post";
import {SendPost} from "./sendPost/SendPost";
import {ActionsType, PostsType} from "components/redux/types";
import {Dispatch} from "redux";
import {DispatchType} from "components/redux/store";

type PostsPropsType = {
    postData: Array<PostsType>
    dispatch: Dispatch<DispatchType>
    newPostText: string
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    return (
        <div className={s.posts}>
            <SendPost
                dispatch={props.dispatch}
                newPostText={props.newPostText}/>
            {
                props.postData.map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
            }
        </div>
    )
}