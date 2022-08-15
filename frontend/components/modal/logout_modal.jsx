import React from "react";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

const LogoutModal = () => {

    return (
        <div className="login-modal">hello
            {/* <button className="signup-modal-button" onClick={signupRoute}>Sign up</button>
            <button className="login-modal-button" onClick={loginRoute}>Log in</button> */}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mapDispatchToProps)(LogoutModal)