import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialoguePerson} from "./dialogPerson/DialoguePerson";
import {DialogMessage} from "./dialogMessage/DialogMessage";
import {addDialogsMessageAC, dialogsMessageOnChangeAC} from "components/redux/dialogs-reducer";
import {ActionsType, DialogsPageType} from "components/redux/types";
import {Dispatch} from "redux";
import {DispatchType} from "components/redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: Dispatch<DispatchType>
    newMessageText: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const onChangeNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(dialogsMessageOnChangeAC(e.currentTarget.value))
    }
    const onClickSendMessage = () => {
        props.dispatch(addDialogsMessageAC())
        props.dispatch(dialogsMessageOnChangeAC(''))
    }

    return (
        <div className={s.dialogs}>
            <h1>Диалоги</h1>
            <div className={`${s.dialogsCol} ${s.dialogsLeftCol}`}>
                {
                    props.dialogsPage.persons.map(p => <DialoguePerson key={p.id} imgSrc={p.imgSrc} name={p.name}/> )
                }
            </div>
            <div className={`${s.dialogsCol} ${s.dialogsRightCol}`}>
                {
                    props.dialogsPage.messages.map(m => <DialogMessage key={m.id} imgSrc={m.imgSrc} name={m.name} text={m.text}/> )
                }
                <textarea onChange={onChangeNewMessage} value={props.newMessageText} placeholder='Our message...'></textarea>
                <button onClick={onClickSendMessage}>Send</button>
            </div>
        </div>
    )
}