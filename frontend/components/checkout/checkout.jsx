import React from "react";
import NavBar from "../nav/navbar"

const Checkout = (props) => {


    return (
        <div className="checkout-component">
            <NavBar />

        </div>
    )
}

const mSTP = (state) => {
    cart = state.entities.cart
}

export default ConnectionType(mSTP, null)(Checkout)