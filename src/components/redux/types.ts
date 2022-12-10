// Types Store
import {ProfileActionsType} from "features/profile/profile-reducer";
import {DialogsActionsType} from "features/dialogs/dialogs-reducer";
import {SidebarActionsType} from "features/sidebar/sidebar-reducer";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type StateType = {
    profile: ProfilePageType
    dialogs: DialogsPageType
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