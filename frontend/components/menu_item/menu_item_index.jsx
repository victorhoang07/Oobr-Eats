import React from "react";


const MenuItemIndex = (props) => {

    const {restaurant} = props

    return (
        <div className="item-index-container">
            <div className="item-index-text">Picked for you</div>
            <div className="item-index">
                {Object.values(restaurant.menu || {}).map(item => {
                    return (
                        <div className="menu-item" key={item.id} >
                            <img className="menu-item-img" src={item.img_url} />
                            <div className="menu-item-info">
                                <p className="menu-item-name">{item.name}</p>
                                <div className="menu-item-price">{item.price}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MenuItemIndex