import {v1} from "uuid";

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

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: () => void) => void
    addPost: () => void
    postTextareaOnChange: (value: string) => void
    addDialogsMessage: () => void
    dialogsMessageOnChange: (value: string) => void
}

export const Store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hey, why nobody me?', likesCount: 8},
                {id: v1(), message: 'It\'s our new program!', likesCount: 12},
                {id: v1(), message: 'Hey, why nobody me?', likesCount: 10},
                {id: v1(), message: 'It\'s our new program!', likesCount: 42},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
    getState() {
        return this._state
    },
    _callSubscriber(store: StoreType) {},
    subscribe(observer: () => void) {
        observer()
        this._callSubscriber = observer
    },
    addPost() {
        this._state.profilePage.posts.push({id: v1(), message: this._state.profilePage.newPostText, likesCount: 0});
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this);
    },
    postTextareaOnChange(value: string) {
        this._state.profilePage.newPostText = value;
        this._callSubscriber(this);
    },
    addDialogsMessage() {
        this._state.dialogsPage.messages.push(
            {
                id: v1(),
                imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png',
                name: 'Я',
                text: this._state.dialogsPage.newMessageText
            }
        );
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this);
    },
    dialogsMessageOnChange(value: string) {
        this._state.dialogsPage.newMessageText = value;
        this._callSubscriber(this);
    }

}