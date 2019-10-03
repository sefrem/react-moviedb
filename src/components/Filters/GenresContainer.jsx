import React from "react";
import { API_URL, API_KEY_3 } from "../../api/api";
import Genres from "./Genres";

export default class GenresContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      moviesGenres: []
    };
  }

  onChangeGenres = e => {
    const value = e.target.value;
    const { with_genres } = this.props;
    this.props.onChangeFilter({
      target: {
        name: "with_genres",
        value: with_genres.includes(value)
          ? with_genres.filter(item => item !== value)
          : [...with_genres, value]
      }
    });
  };

  getMoviesGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=en-US`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          moviesGenres: data.genres
        });
      });
  };

  componentDidMount() {
    this.getMoviesGenres();
  }

  render() {
    return (
      <Genres
        moviesGenres={this.state.moviesGenres}
        with_genres={this.props.with_genres}
        onChangeGenres={this.onChangeGenres}
      />
    );
  }
}
