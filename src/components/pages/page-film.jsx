import React from 'react';
import PropTypes from "prop-types";

import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

import {connect} from 'react-redux';
import {ActionCreators} from '../../reducer/data/data.js';
import {getFilteredData} from '../../reducer/data/selectors.js';
import {getCurrentFilter} from "../../reducer/data/selectors";

class PageFilm extends React.Component {
  componentDidMount() {
    const {changeCurrentFilter} = this.props;

    const {
      // eslint-disable-next-line react/prop-types
      currentDataItem,
      // eslint-disable-next-line react/prop-types
      currentDataFilter
      // eslint-disable-next-line react/prop-types
    } = this.props.location.state;

    changeCurrentFilter(currentDataFilter);

    this.setState({
      currentDataItem,
    });
  }

  render() {
    const {
      data,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
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
    );
  }
}

PageFilm.propTypes = {
  data: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state).slice(0, 4),
    currentFilter: getCurrentFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeActiveFilter(genre));
  },
});

export {PageFilm};

export default connect(mapStateToProps, mapDispatchToProps)(PageFilm);
