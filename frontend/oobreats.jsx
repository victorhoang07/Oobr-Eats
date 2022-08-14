import React from "react";
import ReactDOM from "react-dom/client"
import {login, signup, logout} from './actions/session_actions'
import configureStore from './store/store'
import Root from "./components/root";
// import {login, signup, logout} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    window.login = login
    window.signup = signup
    window.logout = logout

    const store = configureStore();
    // we don't put the store directly on the window because
    // it can be confusing when debugging, sometimes giving you access to state
    // when you shouldn't
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container)
    root.render(<Root store={store}/>);
    
});