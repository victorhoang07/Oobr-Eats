import React, {useState, useEffect} from "react";
import NavBar from "../nav/navbar"
import { connect } from "react-redux";
import CheckoutMap from "../map/checkout_map"
import PickupMap from "../map/pickup_map"
import { openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { removeCartItems } from "../../actions/cart_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { saveReview } from "../../actions/review_actions";

const Checkout = (props) => {

    const {cart, requestRestaurant} = props;
    const item = Object.values(cart)[0];
    const restaurantId = item.restaurantId;
    const [name, setName] = useState("")
    const [state, setState] = useState({
        name: '',
        body: '',
        restaurant_id: restaurantId
    })
    
    useEffect(() => {
        requestRestaurant(restaurantId).then(restaurant => setName(restaurant.restaurant.name))
        return () => props.removeCartItems()
    }, [])

    let total = 0
    Object.values(cart).forEach((cartItem) => {
        total += (cartItem.quantity * cartItem.item.price)
    })
    console.log(name)

    const [errors, setErrors] = useState("")
    const [submit, setSubmit] = useState("")
    const update = (field) => {
        return (e) => setState({ ...state, [field]: e.currentTarget.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name.length === 0 || state.body.length === 0) {
            setErrors("Name and Review cannot be empty")
        } else {
            props.saveReview(state);
            setState({ name: '', body: '', restaurant_id: restaurantId })
            setErrors("")
            setSubmit("Thank you for your feedback!")
        }
    }


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
                <div className="checkout-items-container">
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
                    <div className="review-form-container">
                        <div className="review-form-text">Leave a review for {name}</div>
                        <form className="review-form">
                            <div>
                                <input type="text" value={state.name}
                                    onChange={update('name')}
                                    className="review-form-name"
                                    placeholder="Enter name" />
                            </div>
                            <div>
                                <textarea value={state.body}
                                    onChange={update('body')}
                                    className="review-form-body"
                                    placeholder="Enter review" />
                            </div>
                            <div className="review-errors">{errors}</div>

                            <div className="review-submit">{submit}</div>

                            <button className="review-button" onClick={handleSubmit}>Submit Review</button>
                        </form>
                    </div>
                </div>
                <div className="total"> <span>Total:</span>  <span>${total.toFixed(2)}</span></div>
            </div>
        </div>
    )
}

const mSTP = (state) => ({
    cart: state.entities.cart
})

const mDTP = dispatch => ({
    openModal: (type) => dispatch(openModal(type)),
    removeCartItems: () => dispatch(removeCartItems()),
    requestRestaurant: (id) => dispatch(requestRestaurant(id)),
    saveReview: (review) => dispatch(saveReview(review))
})


export default connect(mSTP, mDTP)(Checkout)