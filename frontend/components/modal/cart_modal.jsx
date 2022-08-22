import React from "react";
import { connect } from "react-redux";
import { removeCartItem } from "../../actions/cart_actions";
import { closeModal } from "../../actions/modal_actions";

const CartModal = (props) => {

    const {cart, removeCartItem, closeModal} = props
    
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
                    {Object.values(cart).map((cartItem) => {
                        return (
                            <div className="cart-item" key={cartItem.item.id}>
                                {/* <div className="cart-item-container"> */}
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
                <button className="checkout-button">Go to checkout</button>
            </div>
        )
    }

}
//consider grabbing restaurant info through reducer and actions
const mSTP = (state) => ({
    cart: state.entities.cart
})

const mDTP = dispatch => ({
    removeCartItem: (itemId) => dispatch(removeCartItem(itemId)),
    closeModal: () => dispatch(closeModal())
})
export default connect(mSTP, mDTP)(CartModal)