import React from "react";
import { Modal, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { actionCreatorToggleModal } from "../../actions/actions"

class Login extends React.Component {
  render() {
    const {toggleModal, showModal} = this.props;
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={toggleModal}
        >
          Login
        </button>
        <Modal isOpen={showModal} toggle={toggleModal}>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(actionCreatorToggleModal())
  }
};

export default connect(
        mapStateToProps,
        mapDispatchToProps
        )(Login);
