import React from "react"
import NavBarContainer from "../nav/navbar";
import { Link } from "react-router-dom";
// import location_marker_logo from "../../../app/assets/images/location_marker_logo.jpeg"
import { useState } from "react";

const SplashPage = () => {

    const [state, setState] = useState({
        findFoodClicked: false
    })    

    const handleClick = () => {

        return setState({state, findFoodClicked: true})
    }

    const renderSignin = () => {
        if (state.findFoodClicked) {
           return <p className="signin-prompt">Please sign in for more options.</p>
        }
    }
    return (
        <div className="splash-page">
            <NavBarContainer />
            
            <div className="splash-text">Order food to your door</div>

            {/* <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
                <span className="delivery">Delivery</span> <span className="pickup">Pickup</span>
            </label> */}

            <div className="input-address-container">
                {/* <img src={location_marker_logo} /> */}
                <input className="input-address" type="text" placeholder="Enter your address" />
                
                <button onClick={() => handleClick()} className="find-food" >Find Food</button>
            </div>

            <div className="signin-text-container">
                {renderSignin()}
                <Link to='/login' className="signin-link">Sign in</Link> <span>for more options</span>
            </div>
            <div className="splash-img-box">
                <img className="splash-img"src="https://oobreats.s3.amazonaws.com/splash1.jpeg" alt="" />
            </div>
        </div>
    )
}


export default SplashPage