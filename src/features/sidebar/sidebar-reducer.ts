import {v1} from "uuid";

const initialState = {
    sidebarFriends: [
        {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Настя"},
        {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Дима"},
        {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Андрей"},
    ]
}

export const sidebarReducer = (state: InitialStateType = initialState, action: SidebarActionsType): InitialStateType => {
    return state
}

// Types
type InitialStateType = {
    sidebarFriends: SidebarFriendsType[]
}
type SidebarFriendsType = {
    id: string
    imgSrc: string
    friend: string
}
export type SidebarActionsType = {}