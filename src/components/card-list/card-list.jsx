import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';

export class CardList extends PureComponent {
  render() {
    const {data} = this.props;

    return (
      <div className="catalog__movies-list">
        {data.map((item) =>
          <Card
            key={item.id}
            showButton={false}
            {...item}
          />
        )}
      </div>
    );
  }
}

CardList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardList;

