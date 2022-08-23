
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";
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

export const removeCartItems = () => {
  return {
    type: REMOVE_CART_ITEMS
  }
}