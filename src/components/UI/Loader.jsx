import React from "react";
import { Spinner } from "reactstrap";

export default class Loader extends React.Component {
  render() {
    return <Spinner className="loader" animation="border" />;
  }
}
