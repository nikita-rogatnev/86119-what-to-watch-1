import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

const NotFound = () => {
  return (
    <div className="user-page">
      <Header/>
      <div className="error">
        <h1>Error 404</h1>
      </div>
      <Footer/>
    </div>
  );
};

export default NotFound;


