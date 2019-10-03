import React from "react";
import { API_URL, API_KEY_3, fetchApi } from "../../api/api";
import Field from "../Utilities/Field";
import { AppContext } from "../App"

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
      let requestToken = await fetchApi(
        `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`
      );
      let validation = await fetchApi(
        `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            request_token: requestToken.request_token
          })
        }
      );
      let authentication = await fetchApi(
        `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            request_token: validation.request_token
          })
        }
      );
      let session = await fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${
          authentication.session_id
        }`
      );
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

const LoginFormContainer = (props) => {
  return <AppContext.Consumer>
    {value => {
      return <LoginForm 
              updateUser={value.updateUser} 
              updateSessionId={value.updateSessionId} 
              {...props}
              />
    }}
  </AppContext.Consumer>
}

LoginFormContainer.displayName="LoginFormContainer";

export default LoginFormContainer;