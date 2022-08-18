import React, {createRef, RefObject} from 'react';
import s from './Dialogs.module.css'
import {DialoguePerson} from "./dialogPerson/DialoguePerson";
import {DialogMessage} from "./dialogMessage/DialogMessage";
import {DialogsPageType, StoreType} from "components/redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    Store: StoreType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const newMessageElement = createRef<HTMLTextAreaElement>()

    const onChangeHandler = (newMessageElement: RefObject<HTMLTextAreaElement>) => {
        newMessageElement.current && props.Store.dialogsMessageOnChange(newMessageElement.current.value)
    }

    const onClickHandler = () => {
        props.Store.addDialogsMessage()
    }

    return (
        <>
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
                    <textarea onChange={() => onChangeHandler(newMessageElement)} ref={newMessageElement} value={props.newMessageText} placeholder='Our message...'></textarea>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </>
    )
}