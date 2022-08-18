import React from "react";
import ReactDOM from "react-dom/client"
import {login, signup, logout} from './actions/session_actions'
import configureStore from './store/store'
import Root from "./components/root";
import {requestRestaurants} from "./actions/restaurant_actions"
document.addEventListener("DOMContentLoaded", () => {
    window.login = login
    window.signup = signup
    window.logout = logout
    window.requestRestaurants = requestRestaurants

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }  
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container)
    root.render(<Root store={store}/>);
    
});