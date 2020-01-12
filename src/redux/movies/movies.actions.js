import CallApi from "../../api/api";
import * as types from "./movies.types";
import { toggleLoader } from "../loader/loader.actions";
import { onChangePagination } from "../filters/filters.actions";

export const fetchMovies = params => dispatch => {
  dispatch(toggleLoader());
  return CallApi.get("/discover/movie", {
    params
  }).then(data => {
    dispatch(onChangePagination({ name: "totalPages", value: data.total_pages }));
    dispatch(getMovies(data.results));
    dispatch(toggleLoader());
  });
}

export const getMovies = payload => {
  return {
    type: types.GET_MOVIES,
    payload
  };
};

export const fetchFavorite = params => dispatch => {
  return CallApi.get("/account/{account_id}/favorite/movies", {
    params
  }).then(data => dispatch(getFavoriteMovies(data.results)))
}

export const getFavoriteMovies = payload => {
  return {
    type: types.GET_FAVORITE_MOVIES,
    payload
  }
}

export const fetchWatchlist = params => dispatch => {
  return CallApi.get("/account/{account_id}/watchlist/movies", {
    params
  }).then(data => dispatch(getWatchlist(data.results)))
}

export const getWatchlist = payload => {
  return {
    type: types.GET_WATCHLIST,
    payload
  }
}