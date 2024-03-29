import {AnyAction, combineReducers} from "redux";
import {dialogsReducer} from "redux/reducers/dialogs-reducer";
import {profileReducer} from "redux/reducers/profile-reducer";
import {sidebarReducer} from "redux/reducers/sidebar-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {usersReducer} from "redux/reducers/users-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "redux/reducers/app-reducer";

const rootReducer = combineReducers({
  app: appReducer,
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

// @ts-ignore
window.store = store
// @ts-ignore