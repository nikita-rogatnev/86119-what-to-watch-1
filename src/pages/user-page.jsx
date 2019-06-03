import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import CardHuge from "../components/card-huge/card-huge";
import Catalog from "../components/catalog/catalog";
import Footer from '../components/footer/footer';

class UserPage extends PureComponent {
  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <React.Fragment>
        <CardHuge/>
        <main className="page-content">
          <Catalog
            data={data}
            filters={filters}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
          />
          <Footer/>
        </main>
      </React.Fragment>
    );
  }
}

UserPage.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

export default UserPage;
