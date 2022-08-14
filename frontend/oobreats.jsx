import React from "react";
import ReactDOM from "react-dom/client"
import Root from "./components/root";
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    window.login = login
    window.signup = signup
    window.logout = logout

    const store = configureStore();
 
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container)
    root.render(<Root store={store}/>);

});