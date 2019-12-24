import * as types from "./loader.types";

const { TOGGLE_LOADER, TOGGLE_LOADER_VIDEOS, TOGGLE_LOADER_CREDITS } = types;

const initialState = {
  general: false,
  videos: false,
  credits: false
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return toggleLoaderState(state, "general");
    case TOGGLE_LOADER_VIDEOS:
      return toggleLoaderState(state, "videos");
    case TOGGLE_LOADER_CREDITS:
      return toggleLoaderState(state, "credits");
    default:
      return state;
  }
};

const toggleLoaderState = (state, loaderKey) => {
  return {
    ...state,
    [loaderKey]: !state[loaderKey]
  };
};

export default loader;
