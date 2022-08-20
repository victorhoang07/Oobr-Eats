export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, itemId, restaurantId) => {
  return {
    type: OPEN_MODAL,
    modal,
    itemId,
    restaurantId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
