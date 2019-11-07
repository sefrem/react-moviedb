import React from "react";

export default class ResetFilters extends React.Component {
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
