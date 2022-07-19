import React from 'react';
import './Posts.css'
import {Post} from "./Post/Post";
import {Send_post} from "./Send-post/Send_post";
import {StateType} from "../../../redux/State";

export function Posts(props: StateType["profilePage"]) {
    return (
        <div className="posts">
            <Send_post/>
            {
                props.postData.map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
            }
        </div>
    )
}