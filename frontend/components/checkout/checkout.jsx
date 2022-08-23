import React, {useState} from "react";
import NavBar from "../nav/navbar"
import { connect } from "react-redux";
import CheckoutMap from "../map/checkout_map"
import PickupMap from "../map/pickup_map"
import { openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
const Checkout = (props) => {

    const {cart} = props

    return (
        <div className="checkout-component">
            <img className="menu-icon" src={window.menuIcon} onClick={() => props.openModal('main')} />
            <Link to="/main" className="main-name-Oobr">Oobr <span className="main-name-Eats">Eats</span></Link>

            <div className="checkout-map-container"><CheckoutMap /></div>
            <div className="checkout-info-container">
                <div className="checkout-text">
                    <div>Thank you for ordering with Oobr Eats!</div>
                    <div className="order-summary">Order summary </div>
                </div>
                {Object.values(cart).map((cartItem) => {
                    return (
                        <div className="checkout-cart-item" key={cartItem.item.id}>
                            <button className="checkout-item-quantity">{cartItem.quantity}</button>
                            <span className="checkout-item-info">
                                {cartItem.item.name}
                                <div className="checkout-item-price">${(cartItem.item.price * cartItem.quantity).toFixed(2)}</div>
                            </span>
                        </div>
                    )
                })}
                <div className="total"> Total: </div>
            </div>
        </div>
    )
}

const mSTP = (state) => ({
    cart: state.entities.cart
})

const mDTP = dispatch => ({
    openModal: (type) => dispatch(openModal(type))
})


export default connect(mSTP, mDTP)(Checkout)