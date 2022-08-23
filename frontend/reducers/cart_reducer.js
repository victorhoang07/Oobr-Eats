import { ADD_CART_ITEM, REMOVE_CART_ITEMS, REMOVE_CART_ITEM } from "../actions/cart_actions";


const cartReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case ADD_CART_ITEM:
            return  Object.assign({}, state,{[action.item.id]: {quantity: action.quantity, item: action.item, restaurantId: action.restaurantId}})
        case REMOVE_CART_ITEM:
            delete nextState[action.itemId]
            return nextState
        case REMOVE_CART_ITEMS:
            return {}
        default:
            return state;
    }

}

export default cartReducer