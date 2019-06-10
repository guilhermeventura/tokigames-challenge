import { ST_TYPES } from "./sorting-constants";
/**
 * Reducers
 */
export const sortFilter = (state = ST_TYPES.SHOW_ALL, action) => {
  switch (action.type) {
    case ST_TYPES.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const sortType = (state = ST_TYPES.SORT_DEPARTURETIME_ASC, action) => {
  switch (action.type) {
    case ST_TYPES.SET_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
};

/**
 * Action creators
 */
export const setVisibilityFilter = filter => ({
  type: ST_TYPES.SET_VISIBILITY_FILTER,
  filter: filter
});

export const setSortType = sortType => ({
  type: ST_TYPES.SET_SORT_TYPE,
  sortType: sortType
});
