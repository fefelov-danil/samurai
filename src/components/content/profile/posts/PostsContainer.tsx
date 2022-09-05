import React from 'react';
import {connect} from "react-redux";
import {Posts} from "components/content/profile/posts/Posts";
import {RootStateType} from "components/redux/store";
import {PostsType} from "components/redux/types";

type MapStateToPropsType = {
    posts: Array<PostsType>
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profile.posts
    }
}

export const PostsContainer = connect(mapStateToProps)(Posts)