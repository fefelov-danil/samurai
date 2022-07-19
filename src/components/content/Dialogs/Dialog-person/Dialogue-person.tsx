import React from 'react';
import {NavLink} from "react-router-dom";

type DialoguePersonPropsType = {
    img: string
    name: string
    id: string
}

export const DialoguePerson = (props: DialoguePersonPropsType) => {
    return (
        <div className="dialogs-person">
            <NavLink to={"/messages/" + props.id}>
                <span className="dialogs-person-ava"><img src={props.img} alt=""/></span>
                <span className="dialogs-person-name">{props.name}</span>
            </NavLink>
        </div>
    );
};