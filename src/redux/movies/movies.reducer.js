import * as types from "./movies.types";

const initialState = {
  movies: [],
  favoriteMovies: [],
  watchlist: []
}
const movies = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
        return {
          ...state,
          movies: action.payload
        }
    case types.GET_FAVORITE_MOVIES: 
        return {
          ...state,
          favoriteMovies: action.payload
        }
    case types.GET_WATCHLIST:
        return {
          ...state,
          watchlist: action.payload
        }
    default:
      return state;
  }
};

export default movies;



// const movies = (state = [], action) => {
//   switch (action.type) {
//     case "GET_MOVIES":
//         return (state = action.payload.slice())
//     default:
//       return state;
//   }
// };
