import {combineReducers} from 'redux';

import {reducer as data} from './data/data';
import {reducer as filter} from './filter/filter';
import {reducer as user} from './user/user';

import NameSpace from './name-spaces';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILTER]: filter,
  [NameSpace.USER]: user,
});
