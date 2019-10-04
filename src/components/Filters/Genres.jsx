import React from "react";
import PropTypes from "prop-types";
import GenresHOC from "./GenresHOC"

const Genres = ({ moviesGenres, with_genres, onChangeGenres }) => {
  return (
    <div className="form-check">
      {moviesGenres.map(item => {
        return (
          <div key={item.id}>
            <input
              className="form-check-input"
              checked={with_genres.includes(`${item.id}`)}
              type="checkbox"
              id={item.id}
              value={item.id}
              name="with_genres"
              onChange={onChangeGenres}
            />
            <label className="form-check-label" htmlFor={item.id}>
              {item.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

Genres.propTypes = {
  moviesGenres: PropTypes.array.isRequired
};

Genres.defaultProps = {
  moviesGenres: []
};

export default GenresHOC(Genres);
