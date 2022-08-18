import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restaurantReducer from "./restaurants_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantReducer
})

export default entitiesReducer