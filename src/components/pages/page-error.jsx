import React, {PureComponent} from 'react';

import Header from "../header/header";
import NotFound from "../not-found/not-found";
import Footer from "../footer/footer";

class PageError extends PureComponent {
  render() {
    return (
      <div className="user-page">
        <Header/>
        <NotFound/>
        <Footer/>
      </div>
    );
  }
}

export default PageError;
