import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "components/header/Header";
import {Profile} from "components/content/profile/Profile";
import {Dialogs} from "components/content/dialogs/Dialogs";
import {News} from "components/content/news/News";
import {Music} from "components/content/music/Music";
import {Settings} from "components/content/settings/Settings";
import {State} from "components/redux/State";
import {Sidebar} from "components/content/sidebar/Sidebar";


export const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar sidebar={State.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/messages' component={ () => <Dialogs dialogsPage={State.dialogsPage} />} />
                    <Route path='/profile' component={ () => <Profile profilePage={State.profilePage} />}/>
                    <Route path='/news' component={ () => <News/>}/>
                    <Route path='/music' component={ () => <Music/>}/>
                    <Route path='/settings' component={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}