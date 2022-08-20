import React from "react";
import { connect } from "react-redux";
import Loading from "../loading/loading";

const MenuItemModal = (props) => {
    
    const {restaurant} = props
    // console.log(props)
    if (!restaurant) {
        return (<Loading />)
    } else {
        return(
            <div>
                {restaurant[2].name}
                {/* {props.itemId} */}
                beep
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return ({
    restaurant: state.entities.restaurants
})}

export default connect(mSTP,null)(MenuItemModal)