import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const MenuItemIndex = (props) => {

    const {restaurant} = props

    return (
        <div className="item-index-container">
            <div className="item-index-text">Picked for you</div>
            <div className="item-index">
                {Object.values(restaurant.menu || {}).map(item => {
                    return (
                        <div className="menu-item" onClick={() => props.openModal('menuItem', item.id, restaurant.id)} key={item.id} >
                            <button className="menu-item-add"> + </button>
                            <img className="menu-item-img" src={item.img_url}/>
                            <div className="menu-item-info">
                                <p className="menu-item-name">{item.name}</p>
                                <div className="menu-item-price">${item.price}</div>
                            </div>
                        </div>
                    )
                })}

                <div className="menu-item">1</div>
                <div className="menu-item">2</div>
                <div className="menu-item">3</div>
                <div className="menu-item">4</div>
                <div className="menu-item">1</div>
                <div className="menu-item">2</div>
                <div className="menu-item">3</div>
                <div className="menu-item">4</div>
            </div>
        </div>
    )
}

const mDTP = dispatch => ({
    openModal: (type, itemId, restaurantId) => dispatch(openModal(type, itemId, restaurantId))
})

export default connect(null, mDTP)(MenuItemIndex)