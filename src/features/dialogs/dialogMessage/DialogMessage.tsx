import React from 'react';
import s from 'features/dialogs/dialogMessage/DialogMessage.module.css'
import {MessagesType} from "features/dialogs/dialogs-reducer";

export const DialogMessage: React.FC<MessagesType> = (props) => {
    return (
        <div className={s.dialogsMessage}>
            <div className={s.dialogsMessageAvaName}>
                <img src={props.imgSrc} alt=""/>
                <p>{props.name}</p>
            </div>
            <div className={s.dialogsMessageText}>
                <p>{props.text}</p>
            </div>
        </div>
    );
};