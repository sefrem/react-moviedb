import * as types from "./filters.types";

const initialState = {
  sorting: {
    sort_by: "popularity.desc",
  primary_release_year: "",
  with_genres: []
  },
  pagination: {
    page: 1,
    totalPages: 500
  }
  
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
        return {
          ...state,
          sorting: {
            ...state.sorting,
            [action.payload.target.name]: action.payload.target.value
          }
        };

    case types.CHANGE_PAGINATION:
          return {
            ...state,
            pagination: {
              ...state.pagination,
              [action.payload.name]: action.payload.value
            }
          }
           
      case types.RESET_FILTERS:
          return {
            ...state,
            ...initialState
          };
    default:
      return state;
  }
};

export default filters;
