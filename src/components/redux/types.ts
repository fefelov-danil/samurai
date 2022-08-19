// Types Store
import {ProfileActionsType} from "components/redux/profile-reducer";
import {DialogsActionsType} from "components/redux/dialogs-reducer";
import {SidebarActionsType} from "components/redux/sidebar-reducer";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    persons: Array<PersonsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type SidebarType = {
    sidebarFriends: SidebarFriendsType[]
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
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
export type SidebarFriendsType = {
    id: string
    imgSrc: string
    friend: string
}

// Types Action
export type ActionsType =
    | ProfileActionsType
    | DialogsActionsType
    | SidebarActionsType