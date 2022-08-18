import React from 'react';
import s from './DialogMessage.module.css'
import {MessagesType} from "components/redux/state";

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