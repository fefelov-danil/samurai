import React, {ChangeEvent, createRef} from 'react';
import s from './SendPost.module.css'
import {StoreType} from "components/redux/state";

type SendPostType = {
    newPostText: string
    Store: StoreType
}

export const SendPost: React.FC<SendPostType> = (props) => {

    let newPostElement = createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        if (newPostElement.current) {
            props.Store.addPost();
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (newPostElement.current) {
            newPostElement.current.value = e.currentTarget.value
            props.Store.postTextareaOnChange(e.currentTarget.value)
        }
    }
    return (
        <div className={s.write}>
            <h3>My posts</h3>
            <textarea
                ref={newPostElement}
                value={props.newPostText}
                onChange={onChangeHandler}
                placeholder='your news...' />
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}