import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onChangeFilter } from "../../redux/filters/filters.actions";

class SortBy extends React.PureComponent {
  static propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
    sort_by: PropTypes.string.isRequired
  };
  static defaultProps = {
    options: [
      {
        label: "Popularity descending",
        value: "popularity.desc"
      },
      {
        label: "Popularity ascending",
        value: "popularity.asc"
      },
      {
        label: "Rating descending",
        value: "vote_average.desc"
      },
      {
        label: "Rating ascending",
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
      filters: { sort_by, primary_release_year },
      onChangeFilter,
      options
    } = this.props;

    return (
      <div className="mt-4">
        <h3>Filters</h3>
        <div className="form-group">
          <label htmlFor="sort_by">Sort By</label>
          <select
            className="form-control"
            name="sort_by"
            id="sort_by"
            value={sort_by}
            onChange={e => onChangeFilter(e)}
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
          <label htmlFor="primary_release_year">Year of Release</label>
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

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
};

const mapDispatchToProps = {
    onChangeFilter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SortBy);
