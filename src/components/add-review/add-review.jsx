import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

import {connect} from "react-redux";
import {Operations} from "../../reducer/data/data";

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      isBlocked: true,
      rating: 3,
      text: null,
    };
  }

  _handleChangeRating(value) {
    this.setState({
      rating: value,
    });
  }

  _handleChangeText(value) {
    if (value.length > 50 && value.length < 400) {
      this.setState({isBlocked: false, text: value});
    } else {
      this.setState({isBlocked: true});
    }
  }

  render() {
    const {id, genre} = this.props;
    const {redirect} = this.state;

    if (redirect) {
      return <Redirect to={{
        pathname: `/film/${id}`,
        state: {
          currentDataItemId: id,
          currentDataFilter: genre,
        },
      }}/>;
    }

    return (
      <div className="add-review">
        <form
          className="add-review__form"
          onSubmit={(e) => {
            e.preventDefault();

            if (!this.state.isBlocked) {
              this.setState({isBlocked: true});
              this.props.postReview(id, this.state.rating, this.state.text);
              this.setState({redirect: true});
            }
          }}>
          <div className="rating">
            <div className="rating__stars">
              {
                new Array(5).fill(1).map((el, index) => (
                  <React.Fragment key={index}>
                    <input
                      className="rating__input"
                      id={`star-${index + 1}`}
                      type="radio"
                      name="rating"
                      value={index + 1}
                      onChange={(e) => this._handleChangeRating(e.target.value)}
                      defaultChecked={this.state.rating === index + 1}
                    />
                    <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
                  </React.Fragment>
                ))
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength={50}
              maxLength={400}
              onKeyUp={(e) => this._handleChangeText(e.target.value)}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddReview.propTypes = {
  id: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  postReview: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postReview: (id, rating, text) => {
    dispatch(Operations.postReview(id, rating, text));
  },
});

export {AddReview};

const AddReviewWrapped = connect(null, mapDispatchToProps)(AddReview);

export default AddReviewWrapped;
