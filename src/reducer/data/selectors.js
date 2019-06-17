import {createSelector} from "reselect";
import NameSpaces from "../name-spaces.js";

const NAME_SPACE = NameSpaces.DATA;

export const getData = (state) => {
  return state[NAME_SPACE].data;
};

export const getDataItemReviews = (state) => {
  return state[NAME_SPACE].dataItemReviews;
};

export const getFilterCurrent = (state) => {
  return state[NAME_SPACE].currentFilter;
};

export const getDataItemCurrent = (state) => {
  return state[NAME_SPACE].dataItemCurrent;
};

export const getAllFilters = createSelector(
  getData, (data) => data.map((dataItem) => dataItem.genre),
);

export const getFilters = createSelector(
  getAllFilters, (filters) => ([`All genres`, ...new Set(filters)]),
);

export const getFilteredData = createSelector(
  getData,
  getFilterCurrent,
  (data, currentFilter) => {
    return (currentFilter === `All genres`) ? data : data.filter((dataItem) => dataItem.genre === currentFilter);
  },
);

export const getDataFavorites = createSelector(getData, (data) => {
  return data.filter((item) => item.isFavorite === true);
});
