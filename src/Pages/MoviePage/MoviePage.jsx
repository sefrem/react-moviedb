import React from "react";
import CallApi from "../../api/api";
import Like from "../../components/UI Components/Like";
import Bookmark from "../../components/UI Components/Bookmark";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import  MovieDetails from "./MovieDetails";
import  MovieVideos from "./MovieVideos";
import  MovieCredits from "./MovieCredits";

export default class MoviePage extends React.Component {
  state = {
    movie: {},
    videos: [],
    credits: []
  };

  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}`).then(response =>
      this.setState({
        movie: response
      })
    );
    CallApi.get(`/movie/${this.props.match.params.id}/videos`).then(response => 
        this.setState({
            videos: response.results
        }));
    CallApi.get(`/movie/${this.props.match.params.id}/credits`).then(response => 
        this.setState({
            credits: response.cast
        }))
  }

  render() {
    const {
      backdrop_path,
      original_title,
      overview,
      release_date,
      id
    } = this.state.movie;
    const release_year = `${release_date}`.split("-")[0];
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <div className="row mt-4">
          <div className="col-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt=""
              className="card-img-top card-img--height"
            />
          </div>
          <div className="col-8">
            <h5 className="title mb-4">
              {original_title} ({release_year})
            </h5>
            <Like item={this.state.movie} />
            <Bookmark item={this.state.movie} />
            <p className="mb-4">{overview}</p>
          </div>
        </div>

        <div className="mt-4">
          <Nav tabs>
            <NavItem>
              <NavLink
                to={`/movie/${id}/details`}
                className="nav-link"
                activeClassName="active"
              >
                Details
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={`/movie/${id}/videos`}
                className="nav-link"
                activeClassName="active"
              >
                Videos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={`/movie/${id}/credits`}
                className="nav-link"
                activeClassName="active"
              >
                Credits
              </NavLink>
            </NavItem>
          </Nav>

          <Switch>
            <Route path="/movie/:id/details"><MovieDetails movie = {this.state.movie}/> </Route>
            <Route path="/movie/:id/videos"><MovieVideos videos = {this.state.videos} /> </Route>
            <Route path="/movie/:id/credits"><MovieCredits credits = {this.state.credits} /> </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
