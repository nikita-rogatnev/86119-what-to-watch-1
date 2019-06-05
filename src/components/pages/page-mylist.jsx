import React from 'react';
import PropTypes from "prop-types";

import Header from "../header/header";
import Catalog from "../catalog/catalog";
import Footer from '../footer/footer';

class PageMyList extends React.PureComponent {
  render() {
    const {
      data,
      currentFilter,
      changeCurrentFilter
    } = this.props;

    return (
      <React.Fragment>
        <Header/>
        <Catalog
          data={data}
          filters={[]}
          currentFilter={currentFilter}
          changeCurrentFilter={changeCurrentFilter}
          showPlayButton={true}
        />
        <Footer/>
      </React.Fragment>
    );
  }
}

PageMyList.propTypes = {
  data: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

export default PageMyList;
