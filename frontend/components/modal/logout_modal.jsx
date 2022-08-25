import React from "react";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
const LogoutModal = (props) => {


    const handleLogout = () => {
        props.logout()
        props.closeModal()
    }
   
    return (
        <div className="logout-modal">
            <div>
            <div className="logout-modal-name"><img className="profile-icon" src={window.profile} alt="" />{props.currentUser.first_name} </div>
            <BsGithub className="github-icon"/>
                <div className="github-logout-modal"><a href="https://github.com/victorhoang07" target="_blank">Github</a></div>
            <AiFillLinkedin className="linkedin-icon"/>
                <div className="linkedin-logout-modal"><a href="https://www.linkedin.com/in/victorhoang07/" target="_blank">Linkedin</a></div>

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