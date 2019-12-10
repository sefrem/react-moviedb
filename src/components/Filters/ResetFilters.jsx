import React from "react";
import { connect } from "react-redux";
import { actionCreatorResetFilters,
  actionCreatorResetPagination } from "../../actions/actions";

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

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetFilters: () => {
    dispatch(actionCreatorResetFilters());
    dispatch(actionCreatorResetPagination());
  }
}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetFilters);
