import ReactDOM from "react-dom";
import {App} from "App";
import React from "react";
import {RootStateType, store} from "components/redux/store";

export const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render()

store.subscribe(() => {
    render()
})