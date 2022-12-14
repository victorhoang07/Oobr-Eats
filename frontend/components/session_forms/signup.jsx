import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FormNav from "../nav/form_nav";
import {  login, removeErrors, signup } from "../../actions/session_actions";


const SignupForm = (props) => {

    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        props.removeErrors()
    }, [])    

    const update = (field) => {
        return (e) => setState({ ...state, [field]: e.currentTarget.value })
    }

    const handleDemoUser = (e) => {
        e.preventDefault();
        const demoUser = { email: 'Demo@user.com', password: 'demouser' }
        // setState(demoUser)
        props.login(demoUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let mainPath = '/main'
        props.processForm(state);
    }

    const renderErrors = () => {
        return (
            <ul>
                {props.errors.map((error, i) => (
                    <li className="login-errors" key={`${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    return (

        <div className="login-container">
            <FormNav />
            <div className="signup-form-container">
                <form className="form-box">
                    <p className="form-title">What's your email and password?</p>
                    {renderErrors()}

                    <label>
                        <input type="text" value={state.first_name}
                            onChange={update('first_name')}
                            className="auth-input"
                            placeholder="Enter first name" />
                    </label>
                    <br /> 
                    <label>
                        <input type="text" value={state.last_name}
                            onChange={update('last_name')}
                            className="auth-input"
                            placeholder="Enter last" />
                    </label>
                    <br />
                    <label>
                        <input type="text" value={state.email}
                            onChange={update('email')}
                            className="auth-input"
                            placeholder="Enter email (required)" />
                    </label>
                    <br />
                    <label>
                        <input type="password" value={state.password}
                            onChange={update('password')}
                            className="auth-input"
                            placeholder="Enter Password (required)" />
                    </label>
                    <button className="signup-form-button" onClick={handleSubmit}>Sign Up</button>
                </form>

                <button className="signup-demo-button" onClick={handleDemoUser}>Continue with Demo</button>
            </div>


        </div>
    )


}

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
    };
}

const mDTP = dispatch => {
    return {
        removeErrors: () => dispatch(removeErrors()),
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    };
}

export default connect(mSTP, mDTP)(SignupForm)