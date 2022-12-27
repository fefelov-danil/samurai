import React, {ChangeEvent} from 'react';
import s from 'features/dialogs/Dialogs.module.css'
import {DialoguePerson} from "features/dialogs/dialogPerson/DialoguePerson";
import {DialogMessage} from "features/dialogs/dialogMessage/DialogMessage";
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {addDialogsMessageAC, dialogsMessageOnChangeAC} from "redux/reducers/dialogs-reducer";

export const Dialogs = () => {
  const dispatch = useAppDispatch()
  const persons = useAppSelector(state => state.dialogs.persons)
  const messages = useAppSelector(state => state.dialogs.messages)
  const newMessageText = useAppSelector(state => state.dialogs.newMessageText)

  const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(dialogsMessageOnChangeAC(e.currentTarget.value))
  }
  const onClickSendMessageHandler = () => {
    dispatch(addDialogsMessageAC())
    dispatch(dialogsMessageOnChangeAC(''))
  }

  return (
    <div className={s.dialogs}>
      <h1>Диалоги</h1>
      <div className={`${s.dialogsCol} ${s.dialogsLeftCol}`}>
        {
          persons.map(person => {
            return <DialoguePerson
              key={person.id}
              imgSrc={person.imgSrc}
              name={person.name}/>
          })
        }
      </div>
      <div className={`${s.dialogsCol} ${s.dialogsRightCol}`}>
        {
          messages.map(message => {
            return <DialogMessage
              key={message.id}
              imgSrc={message.imgSrc}
              name={message.name}
              text={message.text}/>
          })
        }
        <textarea
          onChange={onChangeNewMessageHandler}
          value={newMessageText}
          placeholder='Our message...'></textarea>
        <button onClick={onClickSendMessageHandler}>Send</button>
      </div>
    </div>
  )
}