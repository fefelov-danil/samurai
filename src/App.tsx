import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/content/Profile/Profile";
import {Dialogs} from "./components/content/Dialogs/Dialogs";
import {News} from "./components/content/News/News";
import {Music} from "./components/content/Music/Music";
import {Settings} from "./components/content/Settings/Settings";
import {State} from "./components/redux/State";
import {Sidebar} from "./components/content/Sidebar/Sidebar";


function App() {
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

export default App;
