import React from 'react';

import CardHero from "../card-hero/card-hero";
import AddReview from "../add-review/add-review";

class PageReview extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CardHero {...this.props}/>
        <AddReview/>
      </React.Fragment>
    );
  }
}

export default PageReview;
