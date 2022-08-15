import React from "react";
import { Route } from "react-router-dom";
// import GreetingContainer from "./greetings/greeting_container"
// import LoginFormContainer from "./session/login_form_container"
// import SignupFormContainer from "./session/signup_form_container"
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from "./splash/splash";
import NavBarContainer from "./nav/navbar";
import LoginFormContainer from "../components/session_forms/login"
import SignupFormContainer from "../components/session_forms/signup"
import Modal from "../components/modal/modal"

const App = () => (

    <div>
        <Modal />
        <Route exact path="/" component={SplashPage}/>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />

    </div>

);

export default App;
