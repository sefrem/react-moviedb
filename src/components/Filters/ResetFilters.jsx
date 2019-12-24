import React from "react";
import { connect } from "react-redux";
import { resetFilters } from "../../redux/filters/filters.actions";


class ResetFilters extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={this.props.resetFilters}
          style={{ width: "180px" }}
        >
          Reset All Filters
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
    resetFilters
}

export default connect(
  undefined,
  mapDispatchToProps
)(ResetFilters);
