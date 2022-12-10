import React, {ChangeEvent} from 'react';
import s from 'features/profile/posts/sendPost/SendPost.module.css'
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {addPostAC, postTextareaOnChangeAC} from "features/profile/profile-reducer";

export const SendPost = () => {
  const dispatch = useAppDispatch()
  const postText = useAppSelector(state => state.profile.newPostText)

  const onChangeTextPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(postTextareaOnChangeAC(e.currentTarget.value))
  }
  const onClickAddPostHandler = () => {
    dispatch(addPostAC())
    dispatch(postTextareaOnChangeAC(''))
  }

  return (
    <div className={s.write}>
      <h3>My posts</h3>
      <textarea
        value={postText}
        onChange={onChangeTextPostHandler}
        placeholder='your news...'/>
      <button onClick={onClickAddPostHandler}>Send</button>
    </div>
  )
}