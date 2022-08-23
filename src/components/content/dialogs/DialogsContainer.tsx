import React from 'react';
import {addDialogsMessageAC, dialogsMessageOnChangeAC} from "components/redux/dialogs-reducer";
import {store, StoreType} from "components/redux/store";
import {Dialogs} from "components/content/dialogs/Dialogs";
import {StateType} from "components/redux/types";

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const onChangeNewMessage = (value: string) => {
        props.store.dispatch(dialogsMessageOnChangeAC(value))
    }
    const onClickSendMessage = () => {
        props.store.dispatch(addDialogsMessageAC())
        props.store.dispatch(dialogsMessageOnChangeAC(''))
    }

    return (
        <Dialogs
            onChangeNewMessage={onChangeNewMessage}
            onClickSendMessage={onClickSendMessage}
            state={props.store.getState()}
        />
    )
}