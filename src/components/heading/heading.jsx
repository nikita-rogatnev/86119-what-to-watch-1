import React from "react";
import PropTypes from "prop-types";

import Header from "../header/header";
import Footer from "../footer/footer";

const Heading = (props) => {
  const {title, isSimplified} = props;

  return (
    <div className="user-page">
      {!isSimplified &&
      <Header/>
      }

      <div className="error">
        <h1>{title}</h1>
      </div>

      {!isSimplified &&
      <Footer/>
      }
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  isSimplified: PropTypes.bool,
};

export default Heading;
