
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const addCartItem = (quantity, item) => {
  return {
    type: ADD_CART_ITEM,
    quantity,
    item
  }
}

export const updateCartItem = (quantity, item) => {
  return {
    type: UPDATE_CART_ITEM,
    quantity,
    item
  }
}

export const removeCartItem = (quantity, item) => {
  return {
    type: REMOVE_CART_ITEM,
    quantity,
    item
  }
}
