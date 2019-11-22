const movies = (state = [], action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return getMovies(state, action);
    default:
      return state;
  }
};
const getMovies = (state, action) => {
  return (state = action.movies.slice());
};

export default movies;
