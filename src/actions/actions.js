import CallApi from "../api/api";

export const actionUpdateLogin = () => (dispatch, getState) => {
  const { session_id } = getState().sessionInfo;
  if (session_id) {
    return CallApi.get("/account", {
      params: {
        session_id
      }
    }).then(user => dispatch(actionCreatorUpdateAuth({ user, session_id })));
  }
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

export const actionCreatorOnChangeFilter = e => {
  return {
    type: "CHANGE_FILTER",
    e
  };
};

export const actionCreatorOnChangePagination = (name, value) => {
  return {
    type: "CHANGE_PAGINATION",
    name,
    value
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

export const actionCreatorGetMovies = movies => {
  return {
    type: "GET_MOVIES",
    movies
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