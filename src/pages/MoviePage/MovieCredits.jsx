import React from "react";
import { withRouter } from "react-router";
import CallApi from "../../api/api";
import Loader from "../../components/UI/Loader";
import MovieImage from "../../components/UI/MovieImage";
import { connect } from "react-redux";
import { toggleLoaderCredits } from "../../redux/loader/loader.actions";

class MovieCredits extends React.Component {
  state = {
    credits: []
  };

  componentDidMount() {
    const { toggleLoaderCredits } = this.props;
    toggleLoaderCredits();
    CallApi.get(`/movie/${this.props.match.params.id}/credits`).then(
      response => {
        this.setState({
          credits: response.cast
        });
    toggleLoaderCredits();
      }
    );
  }

  render() {
    const { isLoadingCredits } = this.props;
    const { credits } = this.state;
    return (
      <div className="row">
        {isLoadingCredits ? (
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

const mapStateToProps = state => {
  return {
    isLoadingCredits: state.loader.credits
  }
};

const mapDispatchToProps = {
    toggleLoaderCredits
};

export default withRouter(connect(
                mapStateToProps,
                mapDispatchToProps
                )(MovieCredits));
