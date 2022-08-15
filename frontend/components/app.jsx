import React from "react";
import { Route } from "react-router-dom";
// import GreetingContainer from "./greetings/greeting_container"
// import LoginFormContainer from "./session/login_form_container"
// import SignupFormContainer from "./session/signup_form_container"
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from "./splash/splash";
import NavBarContainer from "./nav/navbar";
import LoginFormContainer from "../components/session_forms/login"

const App = () => (

    <div>
        
        <Route exact path="/" component={SplashPage}/>
        <Route exact path="/login" component={LoginFormContainer} />
    </div>

);

export default App;
