
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const addCartItem = (quantity, item, restaurantId) => {
  return {
    type: ADD_CART_ITEM,
    quantity,
    item,
    restaurantId
  }
}

export const removeCartItem = (itemId) => {
  return {
    type: REMOVE_CART_ITEM,
    itemId
  }
}
