import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

import {connect} from "react-redux";
import {Operations} from "../../reducer/user/user";
import {getUserError, getLoadingStatus, getLoggedStatus} from "../../reducer/user/selectors";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      error: null,
      redirect: false,
    };
  }

  _onChangeEmail(value) {
    this.setState({
      email: value,
      error: value.length ? null : `Please enter a valid email address`,
    });
  }

  _onChangePassword(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    const {redirect} = this.state;
    const {isLogged} = this.props;

    if (redirect && isLogged) {
      return <Redirect to={`/`}/>;
    }

    return (
      <section className="sign-in user-page__content">
        <form
          className="sign-in__form"
          onSubmit={(e) => {
            this.props.loginUser(this.state.email, this.state.password);
            e.preventDefault();
            this.setState({redirect: true});
          }}>

          {this.props.userError && <div className="sign-in__message">
            <p>{this.props.userError}</p>
          </div>}

          {this.state.error && <div className="sign-in__message">
            <p>{this.state.error}</p>
          </div>}

          <div className="sign-in__fields">
            <div className={`sign-in__field ${this.state.error ? `sign-in__field--error` : ``}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                autoComplete="username email"
                required="required"
                onKeyUp={(e) => this._onChangeEmail(e.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>

            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                autoComplete="current-password"
                required="required"
                onKeyUp={(e) => this._onChangePassword(e.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>

          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              {this.props.isLoading ? `Please wait...` : `Sign in`}
            </button>
          </div>
        </form>
      </section>
    );
  }
}

SignIn.propTypes = {
  userError: PropTypes.string,
  loginUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    isLogged: getLoggedStatus(state),
    userError: getUserError(state),
    isLoading: getLoadingStatus(state),
  });

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => {
    dispatch(Operations.loginUser(email, password));
  },
});

export {SignIn};

const SignInWrapped = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInWrapped;
