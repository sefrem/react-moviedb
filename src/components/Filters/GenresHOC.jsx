import React from "react";
import CallApi from "../../api/api";
import { connect } from "react-redux";
import { compose } from "redux";
import { onChangeFilter } from "../../redux/filters/filters.actions";

function GenresHOC(Component) {
  return class extends React.PureComponent {
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
      CallApi.get("/genre/movie/list", {
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
  };
}

const mapStateToProps = state => {
  return {
    with_genres: state.filters.with_genres
  }
}

const mapDispatchToProps = {
    onChangeFilter
}

const composedHOC = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  GenresHOC
);

export default composedHOC;