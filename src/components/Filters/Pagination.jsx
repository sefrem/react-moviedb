import React from "react";
import ResetFilters from "./ResetFilters";
import { connect } from "react-redux";
import { onChangePagination } from "../../redux/filters/filters.actions";

class Pagination extends React.Component {
  
  handleClick = value => () =>
    this.props.onChangePagination({ name: "page", value: value });

  render() {
    const {
      pagination: { page, totalPages }
    } = this.props;
   
    return (
      <div className="d-flex flex-column align-items-center">
        <p className="mb-1">
          Page {page} of {totalPages}
        </p>
        <div className="btn-group" style={{ width: "180px" }}>
          <button
            type="button"
            className="btn btn-primary"
            disabled={page === 1}
            onClick={this.handleClick(page - 1)}
            width="150px"
            name="page"
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={page === totalPages || page > totalPages}
            onClick={this.handleClick(page + 1)}
            name="page"
          >
            Next
          </button>
        </div>
        <div className="mt-1">
          <ResetFilters />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pagination: state.filters.pagination,
  };
};

const mapDispatchToProps = {
    onChangePagination
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
