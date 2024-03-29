import React from 'react';
import s from 'features/dialogs/dialogPerson/DialoguePerson.module.css'
import {NavLink} from "react-router-dom";
import {PersonsType} from "redux/reducers/dialogs-reducer";

export const DialoguePerson: React.FC<PersonsType> = (props) => {
  return (
    <div className={s.dialogsPerson}>
      <NavLink to={"/messages/" + props.id}>
        <span className={s.dialogsPersonAva}><img src={props.imgSrc} alt=""/></span>
        <span className={s.dialogsPersonName}>{props.name}</span>
      </NavLink>
    </div>
  );
};