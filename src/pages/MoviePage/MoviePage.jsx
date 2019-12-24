import React from "react";
import CallApi from "../../api/api";
import Loader from "../../components/UI/Loader";
import { Link, Route, Switch } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MovieVideos from "./MovieVideos";
import MovieCredits from "./MovieCredits";
import MovieHeader from "./MovieHeader";
import MovieNavigation from "./MovieNavigation";
import { connect } from "react-redux";
import { toggleLoader } from "../../redux/loader/loader.actions";

class MoviePage extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const { toggleLoader } = this.props;
    console.log(this.props.match)
    toggleLoader();
    CallApi.get(`/movie/${this.props.match.params.id}`).then(response => {
      this.setState({
        movie: response
      });
      toggleLoader();
    });
  }

  render() {
    const { isLoading } = this.props;
    const { movie } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container">
            <Link to="/">Back</Link>
            <MovieHeader movie={movie} />
            <MovieNavigation />
            <Switch>
              <Route path="/movie/:id/details">
                <MovieDetails movie={movie} />{" "}
              </Route>
              <Route path="/movie/:id/videos">
                <MovieVideos />{" "}
              </Route>
              <Route path="/movie/:id/credits">
                <MovieCredits />{" "}
              </Route>
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loader.general
  }
};

const mapDispatchToProps = {
    toggleLoader
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
