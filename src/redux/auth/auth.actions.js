import CallApi from "../../api/api";
import * as constants from "../../constants/constants";

const {
  UPDATE_AUTH,
  LOGOUT,
  TOGGLE_MODAL
} = constants;

export const updateLogin = (session_id) => (dispatch) => {
    return CallApi.get("/account", {
      params: {
        session_id
      }
    }).then(user => dispatch(updateAuth({ user, session_id })));
};

export const updateAuth = payload => {
  return {
    type: UPDATE_AUTH,
    payload
  };
};

export const onLogOut = () => {
  return {
    type: LOGOUT
  };
};

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  };
};