import {
    Store, StoreType,
} from "components/redux/state";
import ReactDOM from "react-dom";
import {App} from "App";
import React from "react";

export const render = (Store: StoreType) => {
    ReactDOM.render(
        <App State={Store.getState()}
             Store={Store}/>,
        document.getElementById('root')
    );
};

Store.subscribe(() => render(Store))