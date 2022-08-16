import React from "react";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LogoutModal = (props) => {



    const handleLogout = () => {
        const splashPage = '/'
        props.logout()
        props.closeModal()
    }

    return (
        <div className="logout-modal">
            <div> <button onClick={handleLogout}>Sign out</button> </div>
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