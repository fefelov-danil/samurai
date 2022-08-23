import {v1} from "uuid";
import {ProfileActionsType, profileReducer} from "components/redux/profile-reducer";
import {DialogsActionsType, dialogsReducer} from "components/redux/dialogs-reducer";
import {SidebarActionsType, sidebarReducer} from "components/redux/sidebar-reducer";
import {StoreType} from "components/redux/types";

export const myStore: StoreType = {
    _state: {
        profile: {
            posts: [
                {id: v1(), message: 'Hey, why nobody me?', likesCount: 8},
                {id: v1(), message: 'It\'s our new program!', likesCount: 12},
                {id: v1(), message: 'Hey, why nobody me?', likesCount: 10},
                {id: v1(), message: 'It\'s our new program!', likesCount: 42},
            ],
            newPostText: '',
        },
        dialogs: {
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
        },
        sidebar: {
            sidebarFriends: [
                {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Настя"},
                {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Дима"},
                {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Андрей"},
            ]
        }
    },
    _callSubscriber(store: StoreType) {},
    getState() {
        return this._state
    },

    subscribe(observer: () => void) {
        observer()
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profile = profileReducer(this.getState().profile, action as ProfileActionsType)
        this._state.dialogs = dialogsReducer(this.getState().dialogs, action as DialogsActionsType)
        this.getState().sidebar = sidebarReducer(this.getState().sidebar, action as SidebarActionsType)
        this._callSubscriber(this)
    }
}

// @ts-ignore
window.Store = myStore