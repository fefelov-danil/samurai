import React, {ChangeEvent} from 'react';
import s from './SendPost.module.css'
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {Textarea} from "common/textarea/Textarea";
import {Button} from "common/button/Button";

export const SendPost = () => {
  const dispatch = useAppDispatch()
  const postText = useAppSelector(state => state.profile.newPostText)

  const onChangeTextPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // dispatch(postTextareaOnChangeAC(e.currentTarget.value))
  }
  const onClickAddPostHandler = () => {
    // dispatch(addPostAC())
    // dispatch(postTextareaOnChangeAC(''))
  }

  return (
    <div className={s.write}>
      <h3>My posts</h3>
      <Textarea
        value={postText}
        onChange={onChangeTextPostHandler}
        placeholder='your news...'/>
      <Button onClick={onClickAddPostHandler}>Send</Button>
    </div>
  )
}