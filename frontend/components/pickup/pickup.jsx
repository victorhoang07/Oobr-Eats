import React, {useEffect} from "react";
import { connect } from "react-redux";
import NavBar from "../nav/navbar";
import { useHistory } from "react-router-dom";
import PickupMap from "../map/pickup_map";
const Pickup = (props) => {

    useEffect(() => {
        props.requestRestaurants()
    }, []) 

    const history = useHistory()

    const restaurantRoute = (id) => {
        let path = `/restaurant/${id}`
        history.push(path)
    }


    return (
        <div className="pickup-container">
            <NavBar />
            <div className="pickup-and-map">
            <div className="pickup-restaurant-index">
                <div className="pickup-text">Pickup nearby</div>
                <div className="pickup-restaurants-container">
                    {Object.values(props.restaurants).map((restaurant) => {
                        return (
                            <div className="pickup-restaurant" key={restaurant.id} onClick={() => restaurantRoute(restaurant.id)}>
                                <img className="pickup-index-img" src={restaurant.img_url} />
                                <div className="restaurant-index-info">
                                    <p className="restaurant-index-name">{restaurant.name}</p>
                                    <div className="restaurant-index-rating">{restaurant.rating}</div>
                                </div>
                                <div>$0.69 Delivery Fee</div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>

            <div className="pickup-map-container"><PickupMap /></div>
            </div>
        </div>
    )
}

const mSTP = (state) => ({
    restaurants: state.entities.restaurants
})

const mDTP = dispatch => ({
    requestRestaurants: () => dispatch(requestRestaurants())
})

export default connect(mSTP, mDTP)(Pickup)

