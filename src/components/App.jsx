import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "",
        with_genres: []
      },
      pagination: {
        page: 1,
        totalPages: ""
      }
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

  onChangePagination = ({ name, value }) => {
    this.setState(prevState => ({
      pagination: {
        ...prevState.pagination,
        [name]: value
      }
    }));
  };

  resetFilters = () => {
    this.setState({
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "",
        with_genres: []
      },
      pagination: {
        page: 1,
        totalPages: ""
      }
    });
  };

  render() {
    const { filters, pagination } = this.state;

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
                  onChangePagination={this.onChangePagination}
                  pagination={pagination}
                  resetFilters={this.resetFilters}
                  setCheckboxesState={this.setCheckboxesState}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={filters}
              pagination={pagination}
              onChangePagination={this.onChangePagination}
            />
          </div>
        </div>
      </div>
    );
  }
}
