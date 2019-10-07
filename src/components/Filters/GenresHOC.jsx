import React from "react";
import CallApi from "../../api/api";

export default (Component) => class GenresHOC extends React.PureComponent {
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
    CallApi.get('/genre/movie/list', {
      params: {
        language: "en-US"
      }
    }).then(data => {
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
      <Component
        moviesGenres={this.state.moviesGenres}
        with_genres={this.props.with_genres}
        onChangeGenres={this.onChangeGenres}
      />
    );
  }
}
