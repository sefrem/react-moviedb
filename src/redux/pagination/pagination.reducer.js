import * as types from "./pagination.types";

const initialState = {
    page: 1,
    totalPages: 500
  };
  
  const pagination = (state = initialState, action) => {
    switch (action.type) {
      case types.CHANGE_PAGINATION:
          return {
            ...state,
            [action.payload.name]: action.payload.value
          };
      case types.RESET_PAGINATION:
          return {
            ...state,
            ...initialState
          };
      default:
        return state;
    }
  };
  
  
  export default pagination;
  