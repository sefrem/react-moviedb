
import * as constants from "../../constants/constants";

export const getMovies = payload => {
  return {
    type: constants.GET_MOVIES,
    payload
  };
};