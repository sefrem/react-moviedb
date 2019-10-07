import React from "react";
import CallApi from "../../api/api";
import Field from "../Utilities/Field";
import AppContextHOC from "../HOC/AppContextHOC";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    repeatPassword: "",
    errors: {
      username: "",
      password: "",
      repeatPassword: ""
    },
    submitting: false
  };

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: ""
      }
    }));
  };

  handleBlur = () => {
    const errors = this.validateFields();
    if (Object.keys(errors).length) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    }
  };

  validateFields = () => {
    const errors = {};
    const { username, password, repeatPassword } = this.state;
    if (!username) {
      errors.username = "Username required";
    }
    if (!password) {
      errors.password = "Password required";
    }
    if (repeatPassword !== password) {
      errors.repeatPassword = "Must be equal password";
    }
    return errors;
  };

  onSubmit = () => {
    this.setState({
      submitting: true,
      errors: {
        base: ""
      }
    });
    this.login();
  };

  login = async function() {
    try {
      let requestToken = await CallApi.get("/authentication/token/new");
      let validation = await CallApi.post(
        "/authentication/token/validate_with_login",
        {
          body: {
            username: this.state.username,
            password: this.state.password,
            request_token: requestToken.request_token
          }
        }
      );
      let authentication = await CallApi.post("/authentication/session/new", {
        body: {
          request_token: validation.request_token
        }
      });
      let session = await CallApi.get("/account", {
        params: {
          session_id: authentication.session_id
        }
      });
      this.props.updateSessionId(authentication.session_id);
      this.setState({
        submitting: false
      });
      this.props.updateUser(session);
    } catch (error) {
      this.setState({
        submitting: false,
        errors: {
          base: error.status_message
        }
      });
    }
  };

  onLogin = e => {
    e.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.onSubmit();
    }
  };

  render() {
    const {
      username,
      password,
      repeatPassword,
      errors,
      submitting
    } = this.state;
    return (
      <div className="form-login-container">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal text-center">
            Авторизация
          </h1>
          <Field
            labelText="Пользователь"
            type="text"
            className="form-control"
            id="username"
            placeholder="Пользователь (подсказка - Sefre)"
            name="username"
            value={username}
            onChange={this.onChange}
            onBlur={this.handleBlur}
            error={errors.username}
          />
          <Field
            labelText="Пароль"
            type="password"
            className="form-control"
            id="password"
            placeholder="Пароль (подсказка - 1p222)"
            name="password"
            value={password}
            onChange={this.onChange}
            onBlur={this.handleBlur}
            error={errors.password}
          />
          <Field
            labelText="Повторите пароль"
            type="password"
            className="form-control"
            id="repeatPassword"
            placeholder="Повторите пароль"
            name="repeatPassword"
            value={repeatPassword}
            onChange={this.onChange}
            onBlur={this.handleBlur}
            error={errors.repeatPassword}
          />

          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.onLogin}
            disabled={submitting}
          >
            Вход
          </button>
          {errors.base && (
            <div className="invalid-feedback text-center">{errors.base}</div>
          )}
        </form>
      </div>
    );
  }
}

export default AppContextHOC(LoginForm);
