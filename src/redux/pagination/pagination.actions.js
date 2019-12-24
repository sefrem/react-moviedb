
import * as types from "./pagination.types";

export const onChangePagination = payload => {
  return {
    type: types.CHANGE_PAGINATION,
    payload
  };
};

export const resetPagination = () => {
  return {
    type: types.RESET_PAGINATION
  };
};