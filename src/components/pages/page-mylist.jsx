import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import Header from "../header/header";
import Favorites from "../favorites/favorites";
import Footer from '../footer/footer';

class PageMyList extends PureComponent {
  render() {
    const {
      dataFavorite,
    } = this.props;

    return (
      <React.Fragment>
        <Header/>
        <Favorites data={dataFavorite}/>
        <Footer/>
      </React.Fragment>
    );
  }
}

PageMyList.propTypes = {
  dataFavorite: PropTypes.array.isRequired,
};

export default PageMyList;
