import {v1} from "uuid";

const initialState = {
  posts: [
    {id: v1(), message: 'Hey, why nobody me?', likesCount: 8},
    {id: v1(), message: 'It\'s our new program!', likesCount: 12},
    {id: v1(), message: 'Hey, why nobody me?', likesCount: 10},
    {id: v1(), message: 'It\'s our new program!', likesCount: 42},
  ],
  newPostText: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
  switch (action.type) {
    case "ADD-POST":
      const newPost = {id: v1(), message: state.newPostText, likesCount: 0}
      return {...state, posts: [...state.posts, newPost]}
    case "POST-TEXTAREA-ONCHANGE":
      return {...state, newPostText: action.text}
  }
  return state
}

// Action Creators
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const postTextareaOnChangeAC = (text: string) => ({type: 'POST-TEXTAREA-ONCHANGE', text} as const)

// Types
type InitialStateType = {
  posts: Array<PostsType>
  newPostText: string
}
type PostsType = {
  id: string
  message: string
  likesCount: number
}
export type ProfileActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof postTextareaOnChangeAC>

