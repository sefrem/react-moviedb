import * as types from "./filters.types";

const {
  CHANGE_FILTER,
  RESET_FILTERS,
} = types;

export const onChangeFilter = payload => {
    return {
      type: CHANGE_FILTER,
      payload
    };
  };

  export const resetFilters = () => {
    return {
      type: RESET_FILTERS
    };
  };