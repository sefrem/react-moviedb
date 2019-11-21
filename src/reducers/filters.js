const initialState = {
        sort_by: "popularity.desc",
        primary_release_year: "",
        with_genres: []
    }

const filters = (state = initialState, action) => {
    switch (action.type) {
      case "CHANGE_FILTER":
        return changeFilter(state, action);
      case "RESET_FILTERS":
        return resetFilters(state);
      default:
        return state;
    }
  };

const changeFilter = (state, action) => {
    return {
      ...state,
      [action.e.target.name]: action.e.target.value
    };
  }

  const resetFilters = state => {
    return {
      ...state,
      ...initialState
    };
  }
  
  export default filters;