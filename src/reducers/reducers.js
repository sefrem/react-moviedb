import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  user: null,
  session_id: cookies.get("session_id"),
  showModal: false,
  movies: [],
  isLoading: false,
  videos: {
    isLoading: false
  },
  credits: {
    isLoading: false
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

const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_AUTH":
      cookies.set("session_id", action.payload.session_id, {
        path: "/",
        maxAge: 2592000
      });
      return {
        ...state,
        user: action.payload.user,
        session_id: action.payload.session_id
      };
    case "LOGOUT":
      cookies.remove("session_id");
      return {
        ...state,
        session_id: null,
        user: null
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal
      };
    case "CHANGE_FILTER":
      const newFilter = {
        ...state.filters,
        [action.e.target.name]: action.e.target.value
      };
      return {
        ...state,
        filters: newFilter
      };
    case "CHANGE_PAGINATION":
      const newPagination = {
        ...state.pagination,
        [action.name]: action.value
      };
      return {
        ...state,
        pagination: newPagination
      };
    case "RESET_FILTERS":
      return {
        ...state,
        filters: initialState.filters,
        pagination: initialState.pagination
      };
    case "UPDATE_MOVIES":
      return {
        ...state,
        movies: action.movies
      };
    case "TOGGLE_LOADER":
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case "TOGGLE_LOADER_VIDEOS":
      const newVideos = {
        ...state.videos,
        isLoading: !state.videos.isLoading
      }
      return {
        ...state,
        videos: newVideos
      };
      case "TOGGLE_LOADER_CREDITS":
          const newCredits = {
            ...state.videos,
            isLoading: !state.credits.isLoading
          }
          return {
            ...state,
            credits: newCredits
          }

    default:
      return state;
  }
};

export default reducerApp;
