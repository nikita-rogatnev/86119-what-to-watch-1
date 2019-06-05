import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import CardHero from "../card-hero/card-hero";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

class PageFilm extends PureComponent {
  render() {
    const {
      data,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <React.Fragment>
        <CardHero {...this.props}/>
        <main className="page-content">
          <Catalog
            data={data}
            filters={[]}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
            showMoreButton={false}
            showPlayButton={true}
          />
          <Footer/>
        </main>
      </React.Fragment>
    );
  }
}

PageFilm.propTypes = {
  data: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

export default PageFilm;
