import React from 'react';

type DialogMessagePropsType = {
    imgSrc: string
    name: string
    text: string
}

export const DialogMessage = (props: DialogMessagePropsType) => {
    return (
        <div className="dialogs-message">
            <div className="dialogs-message-ava-n-name">
                <img src={props.imgSrc} alt=""/>
                <p>{props.name}</p>
            </div>
            <div className="dialogs-message-text">
                <p>{props.text}</p>
            </div>
        </div>
    );
};