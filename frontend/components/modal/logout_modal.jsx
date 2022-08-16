import React from "react";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const LogoutModal = (props) => {


    const handleLogout = () => {
        props.logout()
        props.closeModal()
    }
   
    return (
        <div className="logout-modal">
            <div>
            <div className="logout-modal-name">{props.currentUser.first_name}</div>
            <div className="orders-logout-modal"><a >Orders</a></div>
            <div className="favorites-logout-modal"><a >Favorites</a></div>
            <button className="logout-button" onClick={handleLogout}>Sign out</button>

            </div>
        </div>
    )
}

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(LogoutModal)