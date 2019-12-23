import * as constants from "../../constants/constants";

const { CHANGE_FILTER, RESET_FILTERS } = constants;

const initialState = {
  sort_by: "popularity.desc",
  primary_release_year: "",
  with_genres: []
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
        return {
          ...state,
          [action.payload.target.name]: action.payload.target.value
        };
    case RESET_FILTERS:
        return {
          ...state,
          ...initialState
        };
    default:
      return state;
  }
};

export default filters;
