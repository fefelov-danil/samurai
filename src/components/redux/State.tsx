import { v1 } from "uuid";

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
}

export type DialogsPageType = {
    persons: Array<PersonsType>
    messages: Array<MessagesType>
}

export type SidebarType = {
    sidebarFriends: SidebarFriendsType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export const State: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hey, why nobody me?', likesCount: 8},
            {id: v1(), message: 'It\'s our new program!', likesCount: 12},
            {id: v1(), message: 'Hey, why nobody me?', likesCount: 10},
            {id: v1(), message: 'It\'s our new program!', likesCount: 42},
        ],
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
    },
    sidebar: {
        sidebarFriends: [
            {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Настя"},
            {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Дима"},
            {id: v1(), imgSrc: "https://innostudio.de/fileuploader/images/default-avatar.png", friend: "Андрей"},
        ]
    }
}