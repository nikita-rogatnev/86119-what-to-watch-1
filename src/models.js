import PropTypes from "prop-types";

export const userShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
});

export const reviewItemShape = PropTypes.shape({
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
});

export const dataItemShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  runTime: PropTypes.number,
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string,
});
