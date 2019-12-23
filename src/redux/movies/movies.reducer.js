import * as constants from "../../constants/constants";

const { GET_MOVIES } = constants;

const initialState = {
  movies: []
}
const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
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
