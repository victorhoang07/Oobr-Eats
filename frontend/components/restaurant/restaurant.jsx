import React, {useEffect} from "react";
import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_actions";
import NavBar from "../nav/navbar";

const Restaurant = (props) => {
    // const id = props.match.params.restaurantId
    useEffect(() => {
        props.requestRestaurant(props.match.params.restaurantId).then(console.log)
        // props.requestRestaurant(props.restaurant.id)
    }, []) 

    return (
        <div>
            <NavBar />
            <div>{Object.values(props.restaurant).map(restaurant => {
                if (parseInt(restaurant.id) === parseInt(props.match.params.restaurantId)){
                return (
                    <div key={restaurant.id}>
                        {restaurant.name}
                    </div>
                )}
            })}
            </div>
        </div>
    )

}

const mSTP = (state, ownProps) => {
return({
    restaurant: state.entities.restaurants
})}

const mDTP = (dispatch) => ({
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId))
})

export default connect(mSTP, mDTP)(Restaurant)