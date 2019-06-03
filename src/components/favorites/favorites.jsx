import React, {PureComponent} from 'react';

import Card from "../card/card";
import PropTypes from "prop-types";

class Favorites extends PureComponent {
  render() {
    const {data} = this.props;

    return (
      <div className="catalog__movies-list">
        {data.map((item) =>
          <Card
            key={item.id}
            showButton={true}
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


