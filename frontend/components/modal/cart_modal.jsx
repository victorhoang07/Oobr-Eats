import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { removeCartItem } from "../../actions/cart_actions";
import { closeModal } from "../../actions/modal_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { useHistory } from "react-router-dom";

const CartModal = (props) => {

    const {cart, removeCartItem, closeModal, restaurants} = props
    const history = useHistory()

    const handleCheckout = () => {
        const checkoutPath = "/checkout"
        history.push(checkoutPath)
        closeModal()
    }

    let total = 0
    Object.values(cart).forEach((cartItem) => {
        total += (cartItem.quantity * cartItem.item.price)
    })

    if (Object.keys(cart).length === 0) {
        return (
            <div className="empty-cart">
                <div><img src={window.empty_cart} alt="" /> </div>
                <div className="empty-cart-text">I know you're hungry. Fill your cart!</div> 
                <button onClick={() => closeModal()} className="empty-cart-button">Start Shopping</button>
            </div>
        )
    } else {
        return (
            <div className="cart-modal">
                <div className="cart-container">
                    <div className="cart-modal-text">Your Cart:</div>
                    {Object.values(cart).map((cartItem) => {
                        return (
                            <div className="cart-item" key={cartItem.item.id}>
                             
                                    <button className="item-quantity">{cartItem.quantity}</button>
                                    <span className="cart-item-info">
                                        {cartItem.item.name} 
                                        <div className="cart-item-price">${(cartItem.item.price * cartItem.quantity).toFixed(2)}</div>
                                        <button onClick={() => removeCartItem(cartItem.item.id)} className="remove-button">Remove Item</button>
                                    </span>
                                    
                                    <div ><img className="cart-item-img"src={cartItem.item.img_url} alt="" /></div>
                                
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => handleCheckout()} className="checkout-button">Go to checkout • ${total.toFixed(2)}</button>
            </div>
        )
    }

}
//consider grabbing restaurant info through reducer and actions
const mSTP = (state) => ({
    cart: state.entities.cart,
    restaurants: state.entities.restaurants 
})

const mDTP = dispatch => ({
    removeCartItem: (itemId) => dispatch(removeCartItem(itemId)),
    closeModal: () => dispatch(closeModal()),
    // requestRestaurant: (id) => dispatch(requestRestaurant(id))
})
export default connect(mSTP, mDTP)(CartModal)