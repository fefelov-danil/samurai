import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialoguePerson} from "./dialogPerson/DialoguePerson";
import {DialogMessage} from "./dialogMessage/DialogMessage";
import {StateType} from "components/redux/types";

type DialogsPropsType = {
    onChangeNewMessage: (value: string) => void
    onClickSendMessage: () => void
    state: StateType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeNewMessage(e.currentTarget.value)
    }
    const onClickSendMessageHandler = () => {
        props.onClickSendMessage()
    }

    return (
        <div className={s.dialogs}>
            <h1>Диалоги</h1>
            <div className={`${s.dialogsCol} ${s.dialogsLeftCol}`}>
                {
                    props.state.dialogs.persons.map(p => <DialoguePerson key={p.id} imgSrc={p.imgSrc} name={p.name}/> )
                }
            </div>
            <div className={`${s.dialogsCol} ${s.dialogsRightCol}`}>
                {
                    props.state.dialogs.messages.map(m => <DialogMessage key={m.id} imgSrc={m.imgSrc} name={m.name} text={m.text}/> )
                }
                <textarea onChange={onChangeNewMessageHandler} value={props.state.dialogs.newMessageText} placeholder='Our message...'></textarea>
                <button onClick={onClickSendMessageHandler}>Send</button>
            </div>
        </div>
    )
}