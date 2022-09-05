import React from 'react';
import 'assets/css/reset.css'
import 'assets/css/style.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "components/header/Header";
import {Profile} from "components/content/profile/Profile";
import {News} from "components/content/news/News";
import {Music} from "components/content/music/Music";
import {Settings} from "components/content/settings/Settings";
import {Sidebar} from "components/content/sidebar/Sidebar";
import {StoreType} from "components/redux/store";
import {DialogsContainer} from "components/content/dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar sidebar={props.store.getState().sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/messages' component={ () => <DialogsContainer/>} />
                    <Route path='/profile' component={ () => <Profile/>}/>
                    <Route path='/news' component={ () => <News/>}/>
                    <Route path='/music' component={ () => <Music/>}/>
                    <Route path='/settings' component={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}