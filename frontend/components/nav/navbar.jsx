import React, {useEffect, useRef} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
const NavBar = (props) => {

    const history = useHistory()

    const search = useRef(null)
    
    const signupRoute = () => {
        let signupPath = '/signup'
        history.push(signupPath)
    }

    const loginRoute = () => {
        let loginPath = '/login'
        history.push(loginPath)
    }
    const handleMenuClick = (type) => {
        props.openLoginModal('login')
        const menu = document.querySelector(".modal-child")
        menu.classList.toggle('modal-open')
    } 
    const AuthNav = () => {

        return (
            <div className="auth-navbar-container">
                
                <img className="menu-icon" src={window.menuIcon} onClick={() => props.openModal('login')}/>
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

        if (window.location.href !== 'http://localhost:3000/#/main') {
            method = (
                <div className="food-method">
                    <span><Link className="toggle" to="/main">Delivery</Link></span>
                    <span className="method"><Link className="toggle" to="/pickup">Pickup</Link></span>
                </div>
            )
        } else {
            method = (
                <div className="food-method">
                    <span className="method"><Link className="toggle" to="/main">Delivery</Link></span>
                    <span><Link className="toggle" to="/pickup">Pickup</Link></span>
                </div>
            )
        }
        
        useEffect(() => {
            search.current.focus();
        }, []);


        return (
            <div className="auth-navbar-container">
                <img className="menu-icon" src={window.menuIcon} onClick={() => props.openModal('main')} />
                <Link to="/main" className="main-name-Oobr">Oobr <span className="main-name-Eats">Eats</span></Link>
                
                {method}
               
                <div className="delivery-address">
                    App Academy • Now
                </div>

                <div className="search-container"> 
                    <FiSearch className="search-icon"/>
                    <input ref={search} className="search" onClick={() => props.openModal('search')} type="text" placeholder="What are you craving?"/>
                </div>

                <button onClick={() => props.openModal('cart')} className="cart-button"><BsCart2 className="cart-icon"/>Cart</button>

            </div>
        )
    }

    return (!props.currentUser) ? AuthNav() : MainNav()
  
}

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        cart: state.entities.cart
    }
}

const mDTP = dispatch => {
    return { 
        openModal: (type) => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(NavBar)

