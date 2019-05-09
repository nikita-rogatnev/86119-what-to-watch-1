import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';

class PageContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;
    const {genres} = this.props;

    return (
      <div className="page-content">
        <Catalog films={films} genres={genres}/>
        <PageFooter/>
      </div>
    );
  }
}

PageContent.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default PageContent;
