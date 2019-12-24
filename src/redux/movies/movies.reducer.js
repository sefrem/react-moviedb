import * as types from "./movies.types";

const initialState = {
  movies: []
}
const movies = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
        return {
          ...state,
          movies: action.payload.slice()
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
