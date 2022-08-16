import React, {useState} from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import FormNav from "../nav/form_nav";
import { login, removeErrors} from "../../actions/session_actions";


const LoginForm = (props) => {
    
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        props.removeErrors()
    }, [])

    const update = (field) => {
        return (e) => setState({...state, [field]: e.currentTarget.value})
    }

    const handleDemoUser = (e) => {
        e.preventDefault();
        const demoUser = { email: 'victor', password: 'victor' }
        setState(demoUser)
        props.processForm(demoUser)
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
                    <li className="login-errors"key={`${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        
        <div className="login-container">
            <FormNav />
            <div className="form-container">
                <form className="form-box">
                    <p className="form-title">What's your email and password?</p>
                    {renderErrors()}

                    <label>
                        <input type="text" value={state.email}
                            onChange={update('email')}
                            className="auth-input"
                            placeholder="Enter email"/>
                    </label>
                    <br />
                    <label>
                        <input type="password" value={state.password}
                            onChange={update('password')}
                            className="auth-input" 
                            placeholder="Enter Password"/>
                    </label>
                    <button className="login-form-button" onClick={handleSubmit}>Login</button>
                </form>

                <button className="demo-button" onClick={handleDemoUser}> Continue with Demo</button>
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
        processForm: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    };
}

export default connect(mSTP, mDTP)(LoginForm)