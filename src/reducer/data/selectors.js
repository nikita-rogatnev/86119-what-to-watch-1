import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

import {getCurrentFilter} from '../filter/selectors';

const NAME_SPACE = NameSpace.DATA;

export const getData = (state) => state[NAME_SPACE].data;

export const getFilmsGenres = (state) => [`All`, ...new Set(state[NAME_SPACE].data.map((item) => item.genre))];

export const getFilteredData = createSelector(
    getData,
    getCurrentFilter,
    (data, filter) => {
      if (filter === `All`) {
        return data;
      }

      return data.filter(({genre}) => genre === filter);
    }
);
