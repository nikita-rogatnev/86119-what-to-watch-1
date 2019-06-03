import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import Header from "../components/header/header";
import SignIn from "../components/sign-in/sign-in";
import Footer from '../components/footer/footer';

class LoginPage extends PureComponent {
  render() {
    return (
      <div className="user-page">
        <Header/>
        <SignIn/>
        <Footer/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

export default LoginPage;
