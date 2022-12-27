import {AnyAction, combineReducers} from "redux";
import {dialogsReducer} from "features/dialogs/dialogs-reducer";
import {profileReducer} from "features/profile/profile-reducer";
import {sidebarReducer} from "features/sidebar/sidebar-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {usersReducer} from "features/users/users-reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>