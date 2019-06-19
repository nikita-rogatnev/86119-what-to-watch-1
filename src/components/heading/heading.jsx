import React from "react";
import PropTypes from "prop-types";

import Header from "../header/header";
import Footer from "../footer/footer";

class Heading extends React.Component {
  render() {
    const {title} = this.props;

    return (
      <div className="user-page">
        <Header/>
        <div className="error">
          <h1>{title}</h1>
        </div>
        <Footer/>
      </div>
    );
  }
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
