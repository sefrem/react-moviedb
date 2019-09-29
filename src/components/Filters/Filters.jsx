import React from "react";
import SortBy from "./SortBy";
import Pagination from "./Pagination";
import ResetFilters from "./ResetFilters";
import Genres from "./Genres";

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      pagination,
      onChangeFilter,
      onChangePagination,
      resetFilters
    } = this.props;
    return (
      <form className="mb-3">
        <SortBy
          onChangeFilter={onChangeFilter}
          sort_by={sort_by}
          primary_release_year={primary_release_year}
        />

        <Pagination
          pagination={pagination}
          onChangePagination={onChangePagination}
        />

        <Genres with_genres={with_genres} onChangeFilter={onChangeFilter} />
        <ResetFilters resetFilters={resetFilters} />
      </form>
    );
  }
}
