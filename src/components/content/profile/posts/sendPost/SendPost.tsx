import React, {ChangeEvent} from 'react';
import s from './SendPost.module.css'
import {addPostAC, postTextareaOnChangeAC} from "components/redux/profile-reducer";
import {ActionsType} from "components/redux/types";
import {Dispatch} from "redux";
import {DispatchType} from "components/redux/store";

type SendPostType = {
    dispatch: Dispatch<DispatchType>
    newPostText: string
}

export const SendPost: React.FC<SendPostType> = (props) => {

    const onChangeTextPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(postTextareaOnChangeAC(e.currentTarget.value))
    }
    const onClickAddPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(postTextareaOnChangeAC(''))
    }

    return (
        <div className={s.write}>
            <h3>My posts</h3>
            <textarea
                value={props.newPostText}
                onChange={onChangeTextPost}
                placeholder='your news...' />
            <button onClick={onClickAddPost}>Send</button>
        </div>
    )
}