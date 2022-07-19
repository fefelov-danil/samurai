import { v1 } from "uuid";

type PostDataType = {
    id: string
    message: string
    likesCount: number
}
type PersonsDataType = {
    id: string
    imgSrc: string
    name: string
}
type MessageDataType = {
    id: string
    imgSrc: string
    name: string
    text: string
}

type SidebarFriendsType = {
    id: string
    imgSrc: string
    friend: string
}

type profilePageType = {
    postData: PostDataType[]
}

type dialogsPageType = {
    personsData: PersonsDataType[],
    messageData: MessageDataType[]
}

type sidebarType = {
    sidebarFriends: SidebarFriendsType[]
}

export type StateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    sidebar: sidebarType,
}

export const State: StateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hey, why nobody me?', likesCount: 8},
            {id: v1(), message: 'It\'s our new program!', likesCount: 12},
            {id: v1(), message: 'Hey, why nobody me?', likesCount: 10},
            {id: v1(), message: 'It\'s our new program!', likesCount: 42},
        ],
    },
    dialogsPage: {
        personsData: [
            {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Дмитрий'},
            {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Антон'},
            {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Настя'},
            {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Денис'},
            {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Анна'},
            {id: v1(), imgSrc: 'https://innostudio.de/fileuploader/images/default-avatar.png', name: 'Валера'},
        ],
        messageData: [
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