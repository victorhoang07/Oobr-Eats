import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestRestaurants } from "../../actions/restaurant_actions"
import { useHistory } from "react-router-dom";

const ResaturantIndex = (props) => {

    useEffect(() => {
        props.requestRestaurants()
    }, []) 

    const history = useHistory()

    const restaurantRoute = (id) => {
        let path = `/restaurant/${id}`
        history.push(path)
    }

    return (
        
        <div className="restaurant-index-container">
            <h2 className="restaurant-index-text">Popular near you </h2>
            <div className="main-filter-container">
                <div className="main-filter">
                    <p className="filter-text">All Stores</p>
                    <p className="filter-text2">Price Range</p>
                    <div className="price-range-buttons-container">
                        <button className="money-button">$</button>
                        <button className="money-button">$$</button>
                        <button className="money-button">$$$</button>
                        <button className="money-button">$$$$</button>
                    </div>
                </div>
            </div>
            <div className="restaurant-index">
                <div className="restaurants-container">
                    {Object.values(props.restaurants).map((restaurant) => {
                        return (
                            <div className="restaurant" key={restaurant.id} onClick={() => restaurantRoute(restaurant.id)}>
                                <img className="restaurant-index-img" src={restaurant.img_url}/>
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

const mSTP = (state, ownProps) => {
return({
    restaurants: state.entities.restaurants
})}

const mDTP = dispatch => ({
    requestRestaurants: () => dispatch(requestRestaurants())
})

export default connect(mSTP, mDTP)(ResaturantIndex)