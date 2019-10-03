import React, { Component } from "react";
import MoviesList from "./MoviesList";
import { API_URL, API_KEY_3 } from "../../api/api";
import _ from "lodash";

export default class MovieContainer extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  getMovies = (filters, page, with_genres = []) => {
    const { sort_by, primary_release_year } = filters;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${primary_release_year}&with_genres=${with_genres}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
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

    return <MoviesList movies={movies} />;
  }
}
