import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";


const NavBar = (props) => {

    const history = useHistory()

    // useEffect(() => {
    //     if (currentUser) {
    //         props.fetchCurrentUser(currentUser.id)
    //     }
    // }, [])
    
    const signupRoute = () => {
        let signupPath = '/signup'
        history.push(signupPath)
    }

    const loginRoute = () => {
        let loginPath = '/login'
        history.push(loginPath)
    }

    const AuthNav = () => {
        return (
            <div className="auth-navbar-container">
                <h2 className="main-name">Oobr Eats</h2>
                <button onClick={props.openLoginModal}>loginmodal</button>
                <div className="auth-buttons">
                    <button className="login-button" onClick={loginRoute}>Log in</button>
                    <button className="signup-button" onClick={signupRoute}>Sign Up</button>
                </div>

            </div>
        )
    }

    return AuthNav()
}

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return { 
        openLoginModal: () => dispatch(openModal('login')),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(NavBar)

