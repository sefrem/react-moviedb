import * as types from "./filters.types";

const {
  CHANGE_FILTER,
  CHANGE_PAGINATION,
  RESET_FILTERS,
} = types;

export const onChangeFilter = payload => {
    return {
      type: CHANGE_FILTER,
      payload
    };
  };

  export const onChangePagination = payload => {
    return {
      type: CHANGE_PAGINATION,
      payload
    };
  };

  export const resetFilters = () => {
    return {
      type: RESET_FILTERS
    };
  };