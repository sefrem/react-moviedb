const initialState = {
        page: 1,
        totalPages: 500
};

const pagination = (state = initialState, action) => {
    switch(action.type) {
    case "CHANGE_PAGINATION":
        return changePagination(state, action);
    case "RESET_PAGINATION":
        return resetPagination(state);
    default:
        return state
    }
}

const changePagination = (state, action) => {
    return  {
      ...state,
      [action.name]: action.value
    };
  }

const resetPagination = state => {
    return {
        ...state,
        ...initialState
    }
}

  export default pagination;