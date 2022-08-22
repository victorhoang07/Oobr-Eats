import { RECEIVE_FILTER, REMOVE_FILTER } from "../actions/filter_actions";

const filterReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_FILTER:
            return  Object.assign({}, state, {type: action.filter})
        case REMOVE_FILTER:
            return null
        default:
            return state;
    }

}

export default filterReducer