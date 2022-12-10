import React from 'react';
import s from './Posts.module.css'
import {Post} from "./post/Post";
import {useAppSelector} from "utils/hooks";
import {SendPost} from "components/content/profile/posts/sendPost/SendPost";

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
                } )
            }
        </div>
    )
}