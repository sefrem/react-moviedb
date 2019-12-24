import CallApi from "../../api/api";
import * as types from "./movies.types";
import { toggleLoader } from "../loader/loader.actions"

export const fetchMovies = params => dispatch => {
  toggleLoader()
  return CallApi.get("/discover/movie", {
    params
  }).then(data => {
    dispatch(getMovies(data.results));
    toggleLoader();
    onChangePagination({ name: "totalPages", value: data.total_pages });
  });
}


export const getMovies = payload => {
  return {
    type: types.GET_MOVIES,
    payload
  };
};