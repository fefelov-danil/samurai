import ReactDOM from "react-dom";
import {App} from "App";
import React from "react";
import {RootStateType, store} from "components/redux/store";
import {Provider} from "react-redux";

export const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render()

store.subscribe(() => {
    render()
})