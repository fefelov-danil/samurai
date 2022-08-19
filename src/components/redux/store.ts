import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "components/redux/dialogs-reducer";
import {profileReducer} from "components/redux/profile-reducer";
import {sidebarReducer} from "components/redux/sidebar-reducer";

const rootReducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = createStore(rootReducers)

export type StoreType = typeof store
export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = ReturnType<typeof store.dispatch>
