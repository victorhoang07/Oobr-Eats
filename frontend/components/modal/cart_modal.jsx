import React from "react";
import { connect } from "react-redux";

const CartModal = (props) => {

    const {cart} = props
    
    if (Object.keys(cart).length === 0) {
        return (
            <div>I know you're hungry. Fill your cart!</div>
        )
    } else {
        return (
            <div className="cart-modal">
                <div className="cart-container">
                    {Object.values(cart).map((cartItem) => {
                        return (
                            <div className="cart-item" key={cartItem.item.id}>
                                {/* <div className="cart-item-container"> */}
                                    <div className="item-quantity">{cartItem.quantity}</div>
                                    <span className="cart-item-info">{cartItem.item.name} <div>{(cartItem.item.price * cartItem.quantity).toFixed(2)}</div></span>
                                {/* </div> */}
                            </div>
                        )
                    })}
                </div>
                <button className="checkout-button">Go to checkout</button>
            </div>
        )
    }

}
//consider grabbing restaurant info through reducer and actions
const mSTP = (state) => ({
    cart: state.entities.cart
})


export default connect(mSTP, null)(CartModal)