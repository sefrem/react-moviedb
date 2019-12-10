import CallApi from "../api/api";
import * as constants from "../constants/constants";

export const actionUpdateLogin = (session_id) => (dispatch) => {
    return CallApi.get("/account", {
      params: {
        session_id
      }
    }).then(user => dispatch(actionCreatorUpdateAuth({ user, session_id })));
};

export const actionCreatorUpdateAuth = payload => {
  return {
    type: "UPDATE_AUTH",
    payload
  };
};

export const actionCreatorLogOut = () => {
  return {
    type: "LOGOUT"
  };
};

export const actionCreatorToggleModal = () => {
  return {
    type: "TOGGLE_MODAL"
  };
};

export const actionCreatorOnChangeFilter = payload => {
  return {
    type: "CHANGE_FILTER",
    payload
  };
};

export const actionCreatorOnChangePagination = payload => {
  return {
    type: "CHANGE_PAGINATION",
    payload
  };
};

export const actionCreatorResetFilters = () => {
  return {
    type: "RESET_FILTERS"
  };
};

export const actionCreatorResetPagination = () => {
  return {
    type: "RESET_PAGINATION"
  };
};

export const actionCreatorGetMovies = payload => {
  return {
    type: "GET_MOVIES",
    payload
  };
};

export const actionCreatorToggleLoader = () => {
  return {
    type: "TOGGLE_LOADER"
  };
};

export const actionCreatorToggleLoaderVideos = () => {
  return {
    type: "TOGGLE_LOADER_VIDEOS"
  };
};

export const actionCreatorToggleLoaderCredits = () => {
  return {
    type: "TOGGLE_LOADER_CREDITS"
  };
};
