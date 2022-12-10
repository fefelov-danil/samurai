import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "components/redux/dialogs-reducer";
import {profileReducer} from "components/redux/profile-reducer";
import {sidebarReducer} from "components/redux/sidebar-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>