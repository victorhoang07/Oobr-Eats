import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";

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
                <button onClick={() => props.openLoginModal('login')}>loginmodal</button>
                <h2 className="main-name">Oobr Eats</h2>
                <div className="auth-buttons">
                    <button className="login-button" onClick={loginRoute}>Log in</button>
                    <button className="signup-button" onClick={signupRoute}>Sign Up</button>
                </div>

            </div>
        )
    }

    const MainNav = () => {
        return (
            <div className="auth-navbar-container">

                <button onClick={() => props.openLoginModal('main')}>logoutmodal</button>
                <Link to="/main" className="main-name-Oobr">Oobr <Link to="/main" className="main-name-Eats">Eats</Link></Link>
                

            </div>
        )
    }
    // debugger;
    return (!props.currentUser) ? AuthNav() : MainNav()
    // return AuthNav()
  
}

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return { 
        openLoginModal: (type) => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(NavBar)

