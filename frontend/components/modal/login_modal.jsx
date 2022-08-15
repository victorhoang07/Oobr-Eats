import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

const LoginModal = (props) => {
    
    const history = useHistory()

    const signupRoute = () => {
        let signupPath = '/signup'
        history.push(signupPath)
        props.closeModal()
    }

    const loginRoute = () => {
        let loginPath = '/login'
        history.push(loginPath)
        props.closeModal()
    }

    return (
        <div className="login-modal">
            <button className="signup-modal-button" onClick={signupRoute}>Sign up</button>
            <button className="login-modal-button" onClick={loginRoute}>Log in</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mapDispatchToProps)(LoginModal)