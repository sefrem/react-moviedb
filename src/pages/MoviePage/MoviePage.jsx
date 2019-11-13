import React from "react";
import CallApi from "../../api/api";
import Loader from "../../components/UI/Loader";
import { Link, Route, Switch } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MovieVideos from "./MovieVideos";
import MovieCredits from "./MovieCredits";
import MovieHeader from "./MovieHeader";
import MovieNavigation from "./MovieNavigation";
import AppContextHOC from "../../components/HOC/AppContextHOC";

class MoviePage extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const { toggleLoader } = this.props;
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
    console.log("render");
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

export default AppContextHOC(MoviePage);
