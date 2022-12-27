import {v1} from "uuid";

const initialState = {
  persons: [
    {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Дмитрий'},
    {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Антон'},
    {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Настя'},
    {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Денис'},
    {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Анна'},
    {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Валера'},
  ],
  messages: [
    {
      id: v1(),
      imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Дмитрий',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: v1(),
      imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Я',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: v1(),
      imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Дмитрий',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: v1(),
      imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Я',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: v1(),
      imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Дмитрий',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: v1(),
      imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
      name: 'Я',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ],
  newMessageText: '',
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
  switch (action.type) {
    case "ADD-DIALOGS-MESSAGE":
      const newMessage = {
        id: v1(),
        imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
        name: 'Дмитрий',
        text: state.newMessageText
      }
      return {...state, messages: [...state.messages, newMessage]}
    case "DIALOGS-MESSAGE-ONCHANGE":
      return {...state, newMessageText: action.text}
  }
  return state
}

// Actions
export const addDialogsMessageAC = () => ({type: 'ADD-DIALOGS-MESSAGE'} as const)
export const dialogsMessageOnChangeAC = (text: string) => ({type: 'DIALOGS-MESSAGE-ONCHANGE', text} as const)


// Types
type InitialStateType = {
  persons: Array<PersonsType>
  messages: Array<MessagesType>
  newMessageText: string
}
export type PersonsType = {
  id?: string
  imgSrc: string
  name: string
}
export type MessagesType = {
  id?: string
  imgSrc: string
  name: string
  text: string
}
export type DialogsActionsType =
  | ReturnType<typeof addDialogsMessageAC>
  | ReturnType<typeof dialogsMessageOnChangeAC>


