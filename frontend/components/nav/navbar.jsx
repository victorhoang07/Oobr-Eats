import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs"
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
                
                <img className="menu-icon" src={window.menuIcon} onClick={() => props.openLoginModal('login')}/>
                <h2 className="main-name">Oobr Eats</h2>
                <div className="auth-buttons">
                    <button className="login-button" onClick={loginRoute}>Log in</button>
                    <button className="signup-button" onClick={signupRoute}>Sign Up</button>
                </div>

            </div>
        )
    }
    
    const MainNav = () => {
        let method;

        if (window.location.href === 'http://localhost:3000/#/main') {
            method = (
            <div className="food-method">
                <span className="method"><Link className="toggle" to="/main">Delivery</Link></span>
                <span><Link className="toggle" to="/pickup">Pickup</Link></span>
            </div>
            )
        } else {
            method = (
            <div className="food-method">
                <span><Link className="toggle" to="/main">Delivery</Link></span>
                <span className="method"><Link className="toggle" to="/pickup">Pickup</Link></span>
            </div>
            )
        }
        
        return (
            <div className="auth-navbar-container">

                <img className="menu-icon" src={window.menuIcon} onClick={() => props.openLoginModal('main')} />
                <Link to="/main" className="main-name-Oobr">Oobr <span className="main-name-Eats">Eats</span></Link>
                
                {method}
               
               
                <div className="delivery-address">
                    App Academy
                </div>

                <input className="search" type="text" placeholder="What are you craving?"/>

                <button className="cart-button"><BsCart2 className="cart-icon"/>Cart</button>

            </div>
        )
    }

    return (!props.currentUser) ? AuthNav() : MainNav()
  
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

