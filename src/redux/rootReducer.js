import { combineReducers } from "redux";
import loader from "./loader/loader.reducer";
import auth from "./auth/auth.reducer";
import movies from "./movies/movies.reducer";
import filters from "./filters/filters.reducer";

const reducerApp = combineReducers({
  auth,
  loader,
  movies,
  filters
});

export default reducerApp;
