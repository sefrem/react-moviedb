import React from "react";
import { Modal, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";
import AppContextHOC from "../HOC/AppContextHOC";

class Login extends React.Component {

  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={this.props.toggleModal}
        >
          Login
        </button>
        <Modal isOpen={this.props.showModal} toggle={this.props.toggleModal}>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AppContextHOC(Login);
