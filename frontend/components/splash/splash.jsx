import React from "react"
import NavBarContainer from "../nav/navbar";
import { Link } from "react-router-dom";
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

            <div className="input-address-container">
                <img className="location-icon" src={window.locationIcon} />
                <input className="input-address" type="text" placeholder="Enter your address" />
                
                <button onClick={() => handleClick()} className="find-food" >Find Food</button>
            </div>

            <div className="signin-text-container">
                {renderSignin()}
                <Link to='/login' className="signin-link">Sign in</Link> <span>for more options</span>
            </div>
            <div className="splash-img-box">
                <img className="splash-img" src="https://oobreats.s3.amazonaws.com/splash6.webp" alt="" />
            </div>
            <footer>helloworld</footer>
        </div>
    )
}


export default SplashPage