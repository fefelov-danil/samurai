import React from 'react';
import s from './Dialogs.module.css'
import {DialoguePerson} from "./dialogPerson/DialoguePerson";
import {DialogMessage} from "./dialogMessage/DialogMessage";
import {DialogsPageType} from "components/redux/State";

export const Dialogs: React.FC<{ dialogsPage: DialogsPageType }> = (props) => {

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
                </div>
            </div>
        </>
    )
}