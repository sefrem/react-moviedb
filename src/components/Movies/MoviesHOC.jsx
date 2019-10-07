import React from "react";
import CallApi from "../../api/api";
import _ from "lodash";


export default (Component) =>  class MoviesHOC extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  getMovies = (filters, page) => {
    const { sort_by, primary_release_year, with_genres } = filters;
    const queryStringParams = {
      language: "ru-RU",
      sort_by: sort_by,
      page: page,
      primary_release_year: primary_release_year
    }
    if (with_genres.length > 0) {
      queryStringParams.with_genres = with_genres.join(",");
    }
    
    CallApi.get("/discover/movie", {
      params: queryStringParams})
      .then(data => {
        this.setState({
          movies: data.results
        });
        this.props.onChangePagination({
          name: "totalPages",
          value: data.total_pages
        });
      });
  };

  componentDidMount() {
    const { filters, page } = this.props;
    this.getMovies(filters, page);
  }

  componentDidUpdate(prevProps) {
    const {
      filters,
      filters: { with_genres },
      pagination: { page },
      onChangePagination
    } = this.props;

    if (!_.isEqual(filters, prevProps.filters)) {
      onChangePagination({ name: "page", value: 1 });
      this.getMovies(filters, 1, with_genres);
    }
    if (page !== prevProps.pagination.page) {
      this.getMovies(filters, page, with_genres);
    }
  }

  render() {
    const { movies } = this.state;

    return <Component movies={movies} />;
  }
}
