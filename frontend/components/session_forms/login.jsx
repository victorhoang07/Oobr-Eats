import React, {useState} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import FormNav from "../nav/form_nav";
import { login } from "../../actions/session_actions";


const LoginForm = (props) => {
    
    const [state, setState] = useState({
        email: '',
        password: ''
    })


    const update = (field) => {
        return (e) => setState({...state, [field]: e.currentTarget.value})
    }

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        let mainPath = '/main'
        props.processForm(state);
        history.push(mainPath)
    }

    const renderErrors = () => {
        return (
            <ul>
                {Object.values(props.errors).map((error, i) => (
                    <li key={`${i}`}>
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

                <button className="demo-button"> Continue with Demo</button>
            </div>

        
        </div>
    )
    

}

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
    };
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
}

export default connect(mSTP, mDTP)(LoginForm)