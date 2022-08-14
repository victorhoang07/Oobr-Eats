import React from "react"


const SplashPage = () => {

    return (
        <div className="splash-page">
            
            <div className="splash-text">Order food to your door</div>

            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
                <span className="over-switch">Delivery</span> <span className="over-switch">Pickup</span>
            </label>

            <div className="input-address-container">
                <input className="input-address" type="text"    placeholder="Enter your address" />
            </div>

            <div className="signin-text-container">
            <a className="signin-text" href=""> Sign in </a> <span>for more options</span>
            </div>

            <div className="splash-img-box">
                <img className="splash-img"src="https://oobreats.s3.amazonaws.com/splash1.jpeg" alt="" />
            </div>
        </div>
    )

}

export default SplashPage;