import * as constants from "../../constants/constants";

const {
  CHANGE_FILTER,
  RESET_FILTERS,
} = constants;

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