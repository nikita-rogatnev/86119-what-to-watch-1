import React from "react";

import Header from "../../header/header";
import SignIn from "../../sign-in/sign-in";
import Footer from "../../footer/footer";

class Login extends React.PureComponent {
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

export default Login;
