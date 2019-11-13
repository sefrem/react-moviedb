import React from "react";
import { withRouter } from "react-router";
import CallApi from "../../api/api";
import Loader from "../../components/UI/Loader";
import AppContextProvider from "../../components/HOC/AppContextHOC"

class MovieVideos extends React.Component {
  state = {
    videos: []
  };

  componentDidMount() {
    const { toggleLoaderVideos } = this.props;
    toggleLoaderVideos();
    CallApi.get(`/movie/${this.props.match.params.id}/videos`).then(response => {
      this.setState({
        videos: response.results
      })
    toggleLoaderVideos();
    }
    );
  }

  render() {
    const { isLoadingVideos } = this.props;
    const { videos } = this.state;
    return (
      <div className="row">
        {isLoadingVideos ? (
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

export default withRouter(AppContextProvider(MovieVideos));
