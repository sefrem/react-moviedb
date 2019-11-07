import React from "react";
import { withRouter } from "react-router";
import CallApi from "../../api/api";
import Loader from "../../components/UI/Loader";
import MovieImage from "../../components/UI/MovieImage";

class MovieCredits extends React.Component {
  state = {
    isLoading: true,
    credits: []
  };

  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}/credits`).then(response =>
      this.setState({
        credits: response.cast,
        isLoading: false
      })
    );
  }

  render() {
    const { credits, isLoading } = this.state;
    return (
      <div className="row">
        {isLoading ? (
          <Loader />
        ) : (
          credits.map((item, index) => (
            <div className="col-md-2 mt-2" key={index}>
              <MovieImage path={item.profile_path} />
              <span>
                <b>{item.name}</b> / {item.character}
              </span>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default withRouter(MovieCredits);
