export const actionCreatorUpdateAuth = payload => {
    return {
        type: "UPDATE_AUTH",
        payload
    }
  }
  
  export const actionCreatorLogOut = () => {
    return {
        type: "LOGOUT"
    }
  }
  
  export const actionCreatorToggleModal = () => {
    return {
        type: "TOGGLE_MODAL"
    }
  }
  
  export const  actionCreatorOnChangeFilter = e => {
    return {
        type: "CHANGE_FILTER",
        e
    }
  }
  
  export const actionCreatorOnChangePagination = (name, value) => {
    return {
        type: "CHANGE_PAGINATION",
       name, 
       value
    }
  }
  
  export const actionCreatorResetFilters = () => {
    return {
        type: "RESET_FILTERS"
    }
  }
  
  export const actionCreatorUpdateMovies = movies => {
    return {
        type: "UPDATE_MOVIES",
        movies
    }
  }
  
  export const actionCreatorToggleLoader = () => {
    return {
        type: "TOGGLE_LOADER"
    }
  }