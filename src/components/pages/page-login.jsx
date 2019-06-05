import React, {PureComponent} from 'react';

import Header from "../header/header";
import SignIn from "../sign-in/sign-in";
import Footer from '../footer/footer';

class PageLogin extends PureComponent {
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

export default PageLogin;
