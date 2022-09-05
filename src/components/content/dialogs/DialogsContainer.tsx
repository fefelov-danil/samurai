import React from 'react';
import {addDialogsMessageAC, dialogsMessageOnChangeAC} from "components/redux/dialogs-reducer";
import {RootStateType} from "components/redux/store";
import {Dialogs} from "components/content/dialogs/Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "components/redux/types";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogs: DialogsPageType
}
type MapDispatchToPropsType = {
    onChangeNewMessage: (value: string) => void
    onClickSendMessage: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeNewMessage: (value: string) => {
            dispatch(dialogsMessageOnChangeAC(value))
        },
        onClickSendMessage: () => {
            dispatch(addDialogsMessageAC())
            dispatch(dialogsMessageOnChangeAC(''))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)