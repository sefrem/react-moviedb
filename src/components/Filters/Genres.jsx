import React from "react";
import { API_URL, API_KEY_3 } from "../../api/api";

export default class Genres extends React.PureComponent {
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
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=en-US`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          moviesGenres: data.genres
        });
      });
  };

  componentDidMount() {
    this.getMoviesGenres();
  }

  render() {
    const { with_genres } = this.props;
    return (
      <div className="form-check">
        {this.state.moviesGenres.map(item => {
          return (
            <div key={item.id}>
              <input
                className="form-check-input"
                checked={with_genres.includes(`${item.id}`)}
                type="checkbox"
                id={item.id}
                value={item.id}
                name="with_genres"
                onChange={this.onChangeGenres}
              />
              <label className="form-check-label" htmlFor={item.id}>
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
