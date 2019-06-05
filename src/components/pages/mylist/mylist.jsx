import React from "react";
import PropTypes from "prop-types";

import Header from "../../header/header";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

class Mylist extends React.PureComponent {
  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <React.Fragment>
        <Header/>
        <Catalog
          data={data}
          filters={filters}
          currentFilter={currentFilter}
          changeCurrentFilter={changeCurrentFilter}
          showPlayButton={true}
        />
        <Footer/>
      </React.Fragment>
    );
  }
}

Mylist.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

export default Mylist;
