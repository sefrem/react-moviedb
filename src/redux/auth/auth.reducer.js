import * as types from "./auth.types";
import { cookies } from "../../utils/cookies";

const { UPDATE_AUTH, LOGOUT, TOGGLE_MODAL } = types;
const initialState = {
  user: null,
  session_id: cookies.get("session_id"),
  showModal: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
        return {
          ...state,
          user: action.payload.user,
          session_id: action.payload.session_id
        };
    case LOGOUT:
        return {
          ...state,
          user: null,
          session_id: null
        };
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      }
    default:
      return state;
  }
};

export default auth;

