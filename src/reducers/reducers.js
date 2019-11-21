import { combineReducers } from "redux";
import loader from "./loader";
import sessionInfo from "./sessionInfo";
import showModal from "./showModal";
import movies from "./movies";
import filters from "./filters";
import pagination from "./pagination"

const reducerApp = combineReducers({
  sessionInfo,
  loader,
  showModal,
  movies,
  filters,
  pagination
})

export default reducerApp;
