import React from "react";
import CallApi from "../../api/api";
import Like from "../../components/UI Components/Like";
import Bookmark from "../../components/UI Components/Bookmark";
import { Link } from "react-router-dom";

export default class MoviePage extends React.Component {

    state = {
        movie: {}
    }

    componentDidMount() {
       CallApi.get(`/movie/${this.props.match.params.id}`)
       .then(response => (
            this.setState({
               movie: response
           })
       ))
    }

    render() {
        const { backdrop_path, original_title, overview, release_date } = this.state.movie;
        const release_year = `${release_date}`.split("-")[0];
        return (
            <div className="d-flex justify-content-center">
                <Link to="/" >Back</Link>
            <div className="card d-flex flex-row" style={{maxWidth: "750px"}}>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt='' className="card-img align-self-center" style={{maxWidth: "300px"}}/>
                    <div >
                <div className="card-body">
                <h5 className="card-title">{original_title} ({release_year})</h5>
                <Like item={this.state.movie}/>
                <Bookmark item={this.state.movie}/>
                <p className="card-text">{overview}</p>
                </div>
                </div>
                
            </div>
            </div>
        )
    }
}