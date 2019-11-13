import React from "react";
import SortBy from "./SortBy";
import Pagination from "./Pagination";
import Genres from "./Genres";
import AppContextHOC from "../../components/HOC/AppContextHOC";

class Filters extends React.Component {
  render() {
    const {
      filters: { with_genres },
      onChangeFilter
    } = this.props;

    return (
      <form className="mb-3">
        <Pagination />
        <SortBy />
        <Genres with_genres={with_genres} onChangeFilter={onChangeFilter} />
      </form>
    );
  }
}

export default AppContextHOC(Filters);
