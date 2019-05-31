import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';
import {actionGetCurrentFilter} from '../data/data';

const NAME_SPACE = NameSpace.DATA;
export const getData = (state) => state[NAME_SPACE].data;

export const getFilteredData = createSelector(
    getData,
    actionGetCurrentFilter,
    (data, filter) => {
      if (filter === `All`) {
        return data;
      }

      return data.filter(({genre}) => genre === filter);
    }
);
