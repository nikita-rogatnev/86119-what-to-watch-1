import React from 'react';

import Card from "../card/card";
import PropTypes from "prop-types";

class Favorites extends React.PureComponent {
  render() {
    const {data} = this.props;

    return (
      <div className="catalog__movies-list">
        {data.map((item) =>
          <Card
            key={item.id}
            showPlayButton={false}
            {...item}
          />
        )}
      </div>
    );
  }
}

Favorites.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Favorites;


