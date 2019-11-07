import React from "react";
import { withRouter } from "react-router";
import CallApi from "../../api/api";
import Loader from "../../components/UI/Loader";

class MovieVideos extends React.Component {
  state = {
    isLoading: true,
    videos: []
  };

  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}/videos`).then(response =>
      this.setState({
        videos: response.results,
        isLoading: false
      })
    );
  }

  render() {
    const { videos, isLoading } = this.state;
    return (
      <div className="row">
        {isLoading ? (
          <Loader />
        ) : (
          videos.map((item, index) => (
            <iframe
              key={index}
              className="col-4 border-0 mt-2"
              title="video"
              src={`https://www.youtube.com/embed/${item.key}`}
              allow="fullscreen"
            />
          ))
        )}
      </div>
    );
  }
}

export default withRouter(MovieVideos);
