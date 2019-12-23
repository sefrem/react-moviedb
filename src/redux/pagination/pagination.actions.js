
import * as constants from "../../constants/constants";

const {
  CHANGE_PAGINATION,
  RESET_PAGINATION,
} = constants;

export const onChangePagination = payload => {
  return {
    type: CHANGE_PAGINATION,
    payload
  };
};

export const resetPagination = () => {
  return {
    type: RESET_PAGINATION
  };
};