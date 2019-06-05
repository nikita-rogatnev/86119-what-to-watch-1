import {createSelector} from "reselect";
import NameSpaces from "../name-spaces.js";

const NAME_SPACE = NameSpaces.DATA;

export const getData = (state) => {
  return state[NAME_SPACE].data;
};

export const getDataFavorite = (state) => {
  return state[NAME_SPACE].dataFavorite;
};

export const getDataComments = (state) => {
  return state[NAME_SPACE].dataComments;
};

export const getCurrentFilter = (state) => {
  return state[NAME_SPACE].currentFilter;
};

export const getAllFilters = createSelector(
    getData, (data) => data.map((dataItem) => dataItem.genre)
);

export const getFilters = createSelector(
    getAllFilters, (filters) => ([`All genres`, ...new Set(filters)])
);

export const getFilteredData = createSelector(
    getData,
    getCurrentFilter,
    (data, currentFilter) => {
      return (currentFilter === `All genres`) ? data : data.filter((dataItem) => dataItem.genre === currentFilter);
    }
);
