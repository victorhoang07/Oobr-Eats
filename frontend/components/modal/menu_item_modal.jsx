import React, {useState} from "react";
import { connect } from "react-redux";
import Loading from "../loading/loading";
import { closeModal } from "../../actions/modal_actions";
const MenuItemModal = (props) => {
    
    const {restaurants, itemId, restaurantId} = props
    const restaurant = restaurants[parseInt(restaurantId)]
    const itemInfo = restaurant.menu[itemId]

    const [amount, setAmount] = useState(1)
    const [total, setTotal] = useState(itemInfo.price.toFixed(2))

    const handleIncrement = () => {
        setAmount(amount + 1)
        setTotal((itemInfo.price.toFixed(2) * (amount + 1)).toFixed(2) )
    }

    const handleDecrement = () => {
        if (amount > 1) {
            setAmount(amount - 1)
            setTotal((itemInfo.price * (amount - 1)).toFixed(2))
        }
    }

    if (!restaurant) {
        return (<Loading />)
    } else {
        return(
            <div className="item-modal-container">
                <button onClick={() => props.closeModal()} className="exit-item-modal">&#x2716;</button>
                <img className="item-modal-img" src='https://oobreats.s3.amazonaws.com/restaurantphotos/popeyes.jpeg' alt="" />
                <div className="item-modal-name">{itemInfo.name}</div>
                <div className="item-modal-price">${itemInfo.price}</div>
                <div className="item-modal-descript">{itemInfo.description}</div>

                <div className="item-button-container">
                    <div className="item-modal-buttons">
                        <button className="item-buttons" onClick={() => handleDecrement()}> - </button>
                        <span>{amount}</span>
                        <button className="item-buttons" onClick={() => handleIncrement()}> + </button>
                    </div>
                    <button className="add-item-button">Add {amount} to order
                    <span className="dot"> • </span> 
                    ${total}
                    </button>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    restaurants: state.entities.restaurants
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(MenuItemModal)