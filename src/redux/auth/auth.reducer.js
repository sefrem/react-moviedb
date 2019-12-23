import Cookies from "universal-cookie";
import * as constants from "../../constants/constants";

const { UPDATE_AUTH, LOGOUT, TOGGLE_MODAL } = constants;
const cookies = new Cookies();

const initialState = {
  user: null,
  session_id: cookies.get("session_id"),
  showModal: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
     cookies.set("session_id", action.payload.session_id, {
          path: "/",
          maxAge: 2592000
        });
        return {
          ...state,
          user: action.payload.user,
          session_id: action.payload.session_id
        };
    case LOGOUT:
        cookies.remove("session_id");
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

