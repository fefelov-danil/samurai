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
import {StateType, StoreType} from "components/redux/state";
import {Sidebar} from "components/content/sidebar/Sidebar";

type AppPropsType = {
    State: StateType
    Store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar sidebar={props.State.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/messages' component={ () => <Dialogs
                        dialogsPage={props.State.dialogsPage}
                        newMessageText={props.State.dialogsPage.newMessageText}
                        Store={props.Store}
                    />} />
                    <Route path='/profile' component={ () => <Profile
                        profilePage={props.State.profilePage}
                        newPostText={props.State.profilePage.newPostText}
                        Store={props.Store}
                    />}/>
                    <Route path='/news' component={ () => <News/>}/>
                    <Route path='/music' component={ () => <Music/>}/>
                    <Route path='/settings' component={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}