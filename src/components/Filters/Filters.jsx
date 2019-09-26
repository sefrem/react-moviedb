import React from "react";
import SortBy from "./SortBy";
import Pagination from "../Utilities/Pagination";

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year },
      page,
      onChangeFilter,
      onChangePage,
      totalPages
    } = this.props;
    return (
      <form className="mb-3">
        <SortBy
          onChangeFilter={onChangeFilter}
          sort_by={sort_by}
          primary_release_year={primary_release_year}
        />

        <Pagination
          page={page}
          onChangePage={onChangePage}
          totalPages={totalPages}
        />
      </form>
    );
  }
}
