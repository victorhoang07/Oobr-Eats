import React, {useEffect} from "react";
import { connect } from "react-redux";
import NavBar from "../nav/navbar";

const Pickup = (props) => {

    useEffect(() => {
        props.requestRestaraunts()
    }, []) 


    return (
        <div className="pickup-container">
            <NavBar />

            <div className="pickup-restaurant-index">
                <div className="pickup-text">Pickup nearby</div>
                <div className="pickup-restaurants-container">
                    {Object.values(props.restaurants).map((restaurant) => {
                        return (
                            <div className="restaurant" key={restaurant.id}>
                                <img className="restaurant-index-img" src={restaurant.img_url} />
                                <div className="restaurant-index-info">
                                    <p className="restaurant-index-name">{restaurant.name}</p>
                                    <div className="restaurant-index-rating">{restaurant.rating}</div>
                                </div>
                                <div>$0.69 Delivery Fee</div>
                            </div>
                        )
                    })
                    }

                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>
                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>
                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>

                </div>
            </div>
        </div>
    )
}

const mSTP = (state) => ({
    restaurants: state.entities.restaurants
})

const mDTP = dispatch => ({
    requestRestaraunts: () => dispatch(requestRestaurants())
})

export default connect(mSTP, mDTP)(Pickup)

