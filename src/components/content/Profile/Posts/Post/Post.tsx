import React from 'react';
import './Post.css'
import ava from '../../../../../assets/images/ava.jpg'

type MessagePropsType = {
    message: string
    likesCount: number
}

export function Post(props: MessagePropsType) {
    return (
        <div className="post">
            <img src={ava} alt=""/>
            <p className="title">{props.message}</p>
            <span className="likes">Likes: {props.likesCount}</span>
        </div>
    )
}