import ReactDOM from "react-dom";
import {App} from "App";
import React from "react";
import {RootStateType, store} from "components/redux/store";

export const render = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render(store.getState())

store.subscribe(() => {
    render(store.getState())
})