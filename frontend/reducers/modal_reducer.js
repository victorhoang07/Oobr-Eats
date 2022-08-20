import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      // return action.modal;
      return {type: action.modal, itemId: action.itemId}
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

// add an addtional argument in the action and then i guess fetch the data. 