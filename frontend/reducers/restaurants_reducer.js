import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const restaurantReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            return Object.assign({},state,{[action.restaurant.id]: action.restaurant})
        default:
            return state;
    }
}

export default restaurantReducer; 