import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_actions";
import NavBar from "../nav/navbar";
import Loading from "../loading/loading"
const Restaurant = (props) => {
    
    const {restaurant} = props
    // const [restaurant, setRestaurant] = useState({})

    useEffect(() => {
        props.requestRestaurant(props.match.params.restaurantId)
    
    }, []) 



    if (!props.restaurant){
        return (<Loading/>)
    } else {
        return (
            <div>
                <NavBar />
                <div className="restaurant-show-img-container">
                    <img className="restaurant-show-img" src={restaurant.img_url} alt="" />
                </div>
                <div>{restaurant.name}</div>
                <div>{restaurant.hours}</div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return({
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
})}

const mDTP = (dispatch) => ({
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId))
})

export default connect(mSTP, mDTP)(Restaurant)