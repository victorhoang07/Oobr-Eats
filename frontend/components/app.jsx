import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from "./splash/splash";
import NavBarContainer from "./nav/navbar";
import LoginFormContainer from "../components/session_forms/login"
import SignupFormContainer from "../components/session_forms/signup"
import Modal from "../components/modal/modal"
import Main from "./main/main";
const App = () => (

    <div>
        <Modal />
        <AuthRoute exact path="/" component={SplashPage}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/main" component={Main}/>

    </div>

);

export default App;
