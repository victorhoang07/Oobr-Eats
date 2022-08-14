import React, {useState} from "react";

const LoginForm = (props) => {
    
    const [state, setState] = useState({
        username: '',
        password: ''
    })

  

    const update = (field) => {
        return (e) => setState({...state, [field]: e.currentTarget.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.processForm(state);
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
        <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="form-box">
                
                <div className="form">
                    {renderErrors()}

                    <label>Email:
                        <input type="text" value={state.email}
                            onChange={update('username')}
                            className="form-input"/>
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" value={this.state.password}
                            onChange={update('password')}
                            className="form-input" />
                    </label>
                    <input type="submit" className="form-submit" value={this.props.formType} />
                </div>
            </form>
        </div>
    )
    

}

export default SessionForm;