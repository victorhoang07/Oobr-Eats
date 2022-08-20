import React from "react";
import { connect } from "react-redux";
import Loading from "../loading/loading";

const MenuItemModal = (props) => {
    
    const {restaurants, itemId, restaurantId} = props
    const restaurant = restaurants[parseInt(restaurantId)]
    const itemInfo = restaurant.menu[itemId]
    // console.log(itemInfo)
    if (!restaurant) {
        return (<Loading />)
    } else {
        return(
            <div className="item-modal-container">
                <img className="item-modal-img" src={itemInfo.img_url} alt="" />
                <div className="item-modal-name">{itemInfo.name}</div>
                <div className="item-modal-price">{itemInfo.price}</div>
                <div className="item-modal-descript">{itemInfo.description}</div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return ({
    restaurants: state.entities.restaurants
})}

export default connect(mSTP,null)(MenuItemModal)