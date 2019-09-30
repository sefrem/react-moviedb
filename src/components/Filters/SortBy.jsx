import React from "react";
import PropTypes from "prop-types";

export default class SortBy extends React.PureComponent {
  static propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
    sort_by: PropTypes.string.isRequired
  };
  static defaultProps = {
    options: [
      {
        label: "Популярные по убыванию",
        value: "popularity.desc"
      },
      {
        label: "Популярные по возрастанию",
        value: "popularity.asc"
      },
      {
        label: "Рейтинг по убыванию",
        value: "vote_average.desc"
      },
      {
        label: "Рейтинг по возрастанию",
        value: "vote_average.asc"
      }
    ]
  };

  selectOptions = () => {
    let arr = [];
    for (let i = 2019; i >= 1900; i--) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };

  render() {
    const {
      primary_release_year,
      sort_by,
      onChangeFilter,
      options
    } = this.props;

    return (
      <div>
        <div className="form-group">
          <label htmlFor="sort_by">Сортировать по:</label>
          <select
            className="form-control"
            name="sort_by"
            id="sort_by"
            value={sort_by}
            onChange={onChangeFilter}
          >
            {options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="primary_release_year">Выбрать год</label>
          <select
            className="form-control"
            id="primary_release_year"
            name="primary_release_year"
            value={primary_release_year}
            onChange={onChangeFilter}
          >
            <option>Select year</option>
            {this.selectOptions()}
          </select>
        </div>
      </div>
    );
  }
}
