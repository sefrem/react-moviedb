import React from "react";
import CallApi from "../../api/api";
import Loader from "../../components/UI/Loader";
import { Link, Route, Switch } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MovieVideos from "./MovieVideos";
import MovieCredits from "./MovieCredits";
import MovieHeader from "./MovieHeader";
import MovieNavigation from "./MovieNavigation";

export default class MoviePage extends React.Component {
  state = {
    isLoading: true,
    movie: {}
  };

  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}`).then(response =>
      this.setState({
        movie: response,
        isLoading: false
      })
    );
  }

  render() {
    const { movie, isLoading } = this.state;
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
