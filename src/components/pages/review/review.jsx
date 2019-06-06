import React from "react";

import CardHero from "../../card-hero/card-hero";
import AddReview from "../../add-review/add-review";
import PropTypes from "prop-types";

class Review extends React.PureComponent {
  render() {
    const {data, reviews} = this.props;

    return (
      <React.Fragment>
        <CardHero
          data={data}
          reviews={reviews}
        />
        <AddReview/>
      </React.Fragment>
    );
  }
}

Review.propTypes = {
  data: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
};

export default Review;
