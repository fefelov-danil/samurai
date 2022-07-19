import React from 'react';
import s from './Post.module.css'
import ava from 'assets/images/ava.jpg'

type MessagePropsType = {
    message: string
    likesCount: number
}

export const Post: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.post}>
            <img src={ava} alt=""/>
            <p className={s.title}>{props.message}</p>
            <span className={s.likes}>Likes: {props.likesCount}</span>
        </div>
    )
}