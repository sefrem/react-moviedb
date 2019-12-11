import * as constants from "../constants/constants";

const { TOGGLE_MODAL } = constants;

const showModal = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
        return !state;
    default:
      return state;
  }
};

export default showModal;
