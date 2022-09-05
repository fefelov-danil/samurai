import React from 'react';
import {addPostAC, postTextareaOnChangeAC} from "components/redux/profile-reducer";
import {RootStateType} from "components/redux/store";
import {SendPost} from "components/content/profile/posts/sendPost/SendPost";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    postText: string
}
type MapDispatchToPropsType = {
    onChangeTextPost: (value: string) => void
    onClickAddPost: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        postText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeTextPost: (value: string) => {
            dispatch(postTextareaOnChangeAC(value))
        },
        onClickAddPost: () => {
            dispatch(addPostAC())
            dispatch(postTextareaOnChangeAC(''))
        }
    }
}

export const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost)

// export const SendPostContainer: React.FC<SendPostType> = (props) => {
//
//     const onChangeTextPost = (value: string) => {
//         props.store.dispatch(postTextareaOnChangeAC(value))
//     }
//     const onClickAddPost = () => {
//         props.store.dispatch(addPostAC())
//         props.store.dispatch(postTextareaOnChangeAC(''))
//     }
//
//     return (
//         <SendPost
//             onChangeTextPost={onChangeTextPost}
//             onClickAddPost={onClickAddPost}
//             postText={props.store.getState().profile.newPostText}
//         />
//     )
// }