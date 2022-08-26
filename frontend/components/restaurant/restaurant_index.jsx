import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestRestaurants } from "../../actions/restaurant_actions";
import { useHistory } from "react-router-dom";
import { receiveFilter, removeFilter } from "../../actions/filter_actions";

const ResaturantIndex = (props) => {

    useEffect(() => {
        props.removeFilter();
        props.requestRestaurants();
    }, []) 

    const history = useHistory();

    const restaurantRoute = (id) => {
        let path = `/restaurant/${id}`;
        history.push(path);
    }

    const handleFilterClick = (type) => {
        props.removeFilter();
        props.receiveFilter(type);
    }


    return (        
        <div className="restaurant-index-container">
            
            <div className="main-filter-container">
                <div className="main-filter">
                    <p className="filter-text">All Stores</p>
                    <p className="filter-text2">Price Range</p>
                    <div className="price-range-buttons-container">
                        <button onClick={() => handleFilterClick('$')} className="money-button">$</button>
                        <button onClick={() => handleFilterClick('$$')}  className="money-button">$$</button>
                        <button onClick={() => handleFilterClick('$$$')}  className="money-button">$$$</button>
                        <button onClick={() => handleFilterClick('$$$$')}  className="money-button">$$$$</button>
                    </div>
                </div>
            </div>
            <div className="restaurant-index">
                <div className="restaurants-container">
                    {Object.values(props.restaurants).map((restaurant) => {
                        if (restaurant.description.includes(props.filter) || restaurant.pricing_rating === (props.filter)) {
                        return (
                            <div className="restaurant" key={restaurant.id} onClick={() => restaurantRoute(restaurant.id)}>
                                <h2 className="restaurant-index-text">{props.filter} </h2>
                                <img className="restaurant-index-img" src={restaurant.img_url}/>
                                <div className="restaurant-index-info">
                                    <p className="restaurant-index-name">{restaurant.name}</p>
                                    <div className="restaurant-index-rating">{restaurant.rating.toFixed(1)}</div>
                                </div>
                                <div className="delivery-fee">$0.69 Delivery Fee</div>
                            </div>
                        )} else if (props.filter === undefined || props.filter === null) {
                            return (
                                <div className="restaurant" key={restaurant.id} onClick={() => restaurantRoute(restaurant.id)}>
                                    <h2 className="restaurant-index-text">Popular near you </h2>
                                    <img className="restaurant-index-img" src={restaurant.img_url} />
                                    <div className="restaurant-index-info">
                                        <p className="restaurant-index-name">{restaurant.name}</p>
                                        <div className="restaurant-index-rating">{restaurant.rating.toFixed(1)}</div>
                                    </div>
                                    <div className="delivery-fee">$0.69 Delivery Fee</div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

const mSTP = (state, ownProps) => {
return({
    restaurants: state.entities.restaurants,
    filter: state.ui.filter.type
})}

const mDTP = dispatch => ({
    requestRestaurants: () => dispatch(requestRestaurants()),
    receiveFilter: (type) => dispatch(receiveFilter(type)),
    removeFilter: () => dispatch(removeFilter())
})

export default connect(mSTP, mDTP)(ResaturantIndex)


