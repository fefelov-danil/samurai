import React from 'react';
import 'assets/css/reset.css'
import 'assets/css/style.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "components/header/Header";
import {Profile} from "components/content/profile/Profile";
import {Dialogs} from "components/content/dialogs/Dialogs";
import {News} from "components/content/news/News";
import {Music} from "components/content/music/Music";
import {Settings} from "components/content/settings/Settings";
import {Sidebar} from "components/content/sidebar/Sidebar";
import {ActionsType, StateType} from "components/redux/types";
import {DispatchType, RootStateType} from "components/redux/store";
import {Dispatch} from "redux";

type AppPropsType = {
    state: RootStateType
    dispatch: Dispatch<DispatchType>
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar sidebar={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/messages' component={ () => <Dialogs
                        dialogsPage={props.state.dialogs}
                        newMessageText={props.state.dialogs.newMessageText}
                        dispatch={props.dispatch}
                    />} />
                    <Route path='/profile' component={ () => <Profile
                        profilePage={props.state.profile}
                        newPostText={props.state.profile.newPostText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/news' component={ () => <News/>}/>
                    <Route path='/music' component={ () => <Music/>}/>
                    <Route path='/settings' component={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}