import {SidebarType} from "components/redux/types";
import {v1} from "uuid";

const initialState: SidebarType = {
    sidebarFriends: [
        {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Настя"},
        {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Дима"},
        {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Андрей"},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: SidebarActionsType) => {
    return state
}

export type SidebarActionsType = {}