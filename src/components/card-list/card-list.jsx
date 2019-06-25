import React from "react";
import PropTypes from "prop-types";
import {dataItemShape} from "../../models";

import Card from "../card/card";
import Heading from "../heading/heading";

const CardList = (props) => {
  return (
    <div className="catalog__movies-list">
      {props.data ?
        <React.Fragment>
          {props.data.map((item) =>
            <Card
              key={item.id}
              showPlayButton={true}
              {...item}
            />)}
        </React.Fragment>
        :
        <Heading title={`No data`} isSimplified={true}/>
      }
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(dataItemShape),
  showPlayButton: PropTypes.bool.isRequired,
};

export default CardList;

