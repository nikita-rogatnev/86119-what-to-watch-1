import {combineReducers} from 'redux';

import {reducer as data} from './data/data';
import {reducer as user} from './user/user';

import NameSpaces from './name-spaces';

export default combineReducers({
  [NameSpaces.DATA]: data,
  [NameSpaces.USER]: user,
});
