import Cookies from "universal-cookie";
import { combineReducers } from "redux";

const cookies = new Cookies();

const initialState = {
  user: null,
  session_id: cookies.get("session_id"),
  showModal: false,
  movies: [],
  loader: {
   general: false,
   videos: false,
   credits: false 
  },
  filters: {
    sort_by: "popularity.desc",
    primary_release_year: "",
    with_genres: []
  },
  pagination: {
    page: 1,
    totalPages: 500
  }
};

// const loaderReducer = combineReducers({

// })
// const rootReducer = combineReducers({

// })

const updateAuth = (state, action) => {
  cookies.set("session_id", action.payload.session_id, {
    path: "/",
    maxAge: 2592000
  });
  return {
    ...state,
    user: action.payload.user,
    session_id: action.payload.session_id
  };
}

const logout = state => {
  cookies.remove("session_id");
      return {
        ...state,
        session_id: null,
        user: null
      };
}

const toggleModal = state => {
  return {
    ...state,
    showModal: !state.showModal
  };
}

const changeFilter = (state, action) => {
  const newFilter = {
    ...state.filters,
    [action.e.target.name]: action.e.target.value
  };
  return {
    ...state,
    filters: newFilter
  };
}

const changePagination = (state, action) => {
  const newPagination = {
    ...state.pagination,
    [action.name]: action.value
  };
  return {
    ...state,
    pagination: newPagination
  };
}

const resetFilters = state => {
  return {
    ...state,
    filters: initialState.filters,
    pagination: initialState.pagination
  };
}

const getMovies = (state, action) => {
  return {
    ...state,
    movies: action.movies
  };
}

const loaderReducer = (loader = {}, action) =>{
  switch(action.type) {
    case "TOGGLE_LOADER":
      return toggleLoader(loader);
    case "TOGGLE_LOADER_VIDEOS":
      return toggleLoaderVideos(loader);
      case "TOGGLE_LOADER_CREDITS":
      return toggleLoaderCredits(loader);
    default:
      return loader;
  }
}

const toggleLoader = state => {
  return toggleLoaderState(state, 'general');
}

const toggleLoaderVideos = state => {
  return toggleLoaderState(state, 'videos');
}

const toggleLoaderCredits = state => {
  return toggleLoaderState(state, 'credits');
}

const toggleLoaderState = (state, loaderKey) => {
  const newLoaderState = {
    ...state.loader,
    [loaderKey]: !state.loader[loaderKey]
  }
  return {
    ...state, 
    loader: newLoaderState
  }
}

const reducerAll = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_AUTH":
      return updateAuth(state, action);
    case "LOGOUT":
      return logout(state);
    case "TOGGLE_MODAL":
      return toggleModal(state, action)
    case "CHANGE_FILTER":
      return changeFilter(state, action);
    case "CHANGE_PAGINATION":
      return changePagination(state, action);
    case "RESET_FILTERS":
      return resetFilters(state);
    case "GET_MOVIES":
      return getMovies(state, action);
    default:
      return state;
  }
};

const reducerApp = combineReducers({
  reducerAll,
  loader: loaderReducer
})

export default reducerApp;
