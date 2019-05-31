const initialState = {
  data: [],
  filters: [],
  currentFilter: `All`,
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  GET_FILTERS: `GET_FILTERS`,
  GET_CURRENT_FILTER: `GET_CURRENT_FILTER`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  FILTER_DATA: `FILTER_DATA`,
};

// LOAD_DATA
export const actionLoadData = (data) => {
  return {
    type: ActionType.LOAD_DATA,
    payload: data
  };
};

export const Operation = {
  loadData: () => (dispatch, _getState, api) =>
    api
      .get(`/films`)
      .then((response) => dispatch(actionLoadData.loadData(transformFilms(response.data)))),
};

// GET_FILTERS
export const actionGetFilters = (data) => {
  return [`All`, ...new Set(data.map((item) => item.genre))];
};

// GET_CURRENT_FILTER
export const actionGetCurrentFilter = () => {
  return {
    type: ActionType.GET_CURRENT_FILTER,
  };
};

// CHANGE_FILTER
export const actionChangeCurrentFilter = (filter) => {
  return {
    type: ActionType.CHANGE_FILTER,
    payload: filter,
  };
};

// FILTER_DATA
export const actionFilterData = (filter) => {
  return {
    type: ActionType.FILTER_DATA,
    payload: filter,
  };
};

export const reducer = (appState = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, appState, {
        data: [...payload],
      });

    case ActionType.GET_FILTERS:
      return Object.assign({}, appState, {
        filters: [`All`, ...new Set(appState.data.filter((item) => item.genre))]
      });

    case ActionType.GET_CURRENT_FILTER:
      return Object.assign({}, appState, {
        currentFilter: appState.currentFilter
      });

    case ActionType.CHANGE_FILTER:
      return Object.assign({}, appState, {
        currentFilter: payload,
      });

    case ActionType.FILTER_DATA:
      return Object.assign({}, appState, {
        data: appState.data.filter((item) => {
          return item.genre === appState.currentFilter;
        })
      });
  }

  return appState;
};

const transformFilms = (items) => items.map((item) => {
  const {id, name, description, rating, director, genre, released, starring} = item;

  return {
    id,
    name,
    posterImageSrc: item[`poster_image`],
    previewImageSrc: item[`preview_image`],
    backgroundImageSrc: item[`background_image`],
    backgroundColor: item[`background_color`],
    description,
    rating,
    scores: item[`scores_count`],
    director,
    starring,
    runTime: item[`run_time`],
    genre,
    releasedYear: released,
    isFavorite: item[`is_favorite`],
    videoSrc: item[`video_link`],
    previewVideoSrc: item[`preview_video_link`],
  };
});
