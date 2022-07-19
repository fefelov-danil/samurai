import React from 'react';
import './Dialogs.css'
import {DialoguePerson} from "./Dialog-person/Dialogue-person";
import {DialogMessage} from "./Dialog-message/Dialog-message";
import {StateType} from "../../redux/State";

export function Dialogs(props: { dialogsPage: StateType["dialogsPage"] }) {

    return (
        <>
            <div className="dialogs">
                <h1>Диалоги</h1>
                <div className="dialogs-col dialogs-left-col">
                    {
                        props.dialogsPage.personsData.map( p => <DialoguePerson key={p.id} img={p.imgSrc} name={p.name} id={p.id}/> )
                    }
                </div>
                <div className="dialogs-col dialogs-right-col">
                    {
                        props.dialogsPage.messageData.map( m => <DialogMessage key={m.id} imgSrc={m.imgSrc} name={m.name} text={m.text}/> )
                    }
                </div>
            </div>
        </>
    )
}