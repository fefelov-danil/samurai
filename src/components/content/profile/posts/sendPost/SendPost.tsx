import React, {ChangeEvent} from 'react';
import s from './SendPost.module.css'

type SendPostPropsType = {
    onChangeTextPost: (value: string) => void
    onClickAddPost: () => void
    postText: string
}

export const SendPost: React.FC<SendPostPropsType> = (props) => {

    const onChangeTextPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextPost(e.currentTarget.value)
    }
    const onClickAddPostHandler = () => {
        props.onClickAddPost()
    }

    return (
        <div className={s.write}>
            <h3>My posts</h3>
            <textarea
                value={props.postText}
                onChange={onChangeTextPostHandler}
                placeholder='your news...' />
            <button onClick={onClickAddPostHandler}>Send</button>
        </div>
    )
}