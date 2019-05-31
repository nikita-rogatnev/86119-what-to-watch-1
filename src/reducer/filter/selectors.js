import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.FILTER;

export const getCurrentFilter = (state) => state[NAME_SPACE].currentFilter;
