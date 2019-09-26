import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: ""
      },
      page: 1,
      totalPages: ""
    };
  }

  onChangeFilter = e => {
    const newFilter = {
      ...this.state.filters,
      [e.target.name]: e.target.value
    };
    this.setState({
      filters: newFilter
    });
  };

  onChangePage = page => {
    this.setState({
      page
    });
  };

  onChangeTotalPages = totalPages => {
    this.setState({
      totalPages
    });
  };

  render() {
    const { filters, page, totalPages } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  filters={filters}
                  onChangeFilter={this.onChangeFilter}
                  onChangePage={this.onChangePage}
                  onChangeYear={this.onChangeYear}
                  page={page}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={filters}
              page={page}
              onChangePage={this.onChangePage}
              onChangeTotalPages={this.onChangeTotalPages}
            />
          </div>
        </div>
      </div>
    );
  }
}
