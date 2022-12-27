import React from 'react';
import s from 'features/profile/posts/Posts.module.css'
import {Post} from "features/profile/posts/post/Post";
import {useAppSelector} from "utils/hooks";
import {SendPost} from "features/profile/posts/sendPost/SendPost";

export const Posts = () => {
  const posts = useAppSelector(state => state.profile.posts)

  return (
    <div className={s.posts}>
      <SendPost/>
      {
        posts.map(post => {
          return <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}/>
        })
      }
    </div>
  )
}