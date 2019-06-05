const initialState = {
  data: [],
  dataFavorite: [],
  dataComments: [],
  currentFilter: `All genres`,
};

export const ActionType = {
  "CHANGE_FILTER": `CHANGE_FILTER`,
  "LOAD_DATA": `LOAD_DATA`,
  "LOAD_DATA_FAVORITE": `LOAD_DATA_FAVORITE`,
  "LOAD_DATA_COMMENTS": `LOAD_DATA_COMMENTS`,
};

export const ActionCreators = {
  changeActiveFilter: (data) => {
    return {
      type: ActionType.CHANGE_FILTER,
      payload: data,
    };
  },

  loadData: (data) => {
    return {
      type: ActionType.LOAD_DATA,
      payload: data
    };
  },

  loadDataFavorite: (data) => {
    return {
      type: ActionType.LOAD_DATA_FAVORITE,
      payload: data
    };
  },

  loadDataComments: (data) => {
    return {
      type: ActionType.LOAD_DATA_COMMENTS,
      payload: data
    };
  },
};

export const Operations = {
  loadData: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreators.loadData(response.data)));
  },

  loadDataFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => dispatch(ActionCreators.loadDataFavorite(response.data)));
  },

  loadDataComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => dispatch(ActionCreators.loadDataComments(response.data)));
  }
};

const mapData = (data) => {
  return data.map((dataItem) => {
    return {
      id: dataItem[`id`],
      name: dataItem[`name`],
      posterImage: dataItem[`poster_image`],
      previewImage: dataItem[`preview_image`],
      backgroundImage: dataItem[`background_image`],
      backgroundColor: dataItem[`background_color`],
      description: dataItem[`description`],
      rating: dataItem[`rating`],
      scoresCount: dataItem[`scores_count`],
      director: dataItem[`director`],
      starring: dataItem[`starring`],
      runTime: dataItem[`run_time`],
      genre: dataItem[`genre`],
      released: dataItem[`released`],
      isFavorite: dataItem[`is_favorite`],
      videoLink: dataItem[`video_link`],
      previewVideoLink: dataItem[`preview_video_link`],
    };
  });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        data: mapData(action.payload)
      });

    case ActionType.LOAD_DATA_FAVORITE:
      return Object.assign({}, state, {
        dataFavorite: mapData(action.payload)
      });

    case ActionType.LOAD_DATA_COMMENTS:
      return Object.assign({}, state, {
        dataComments: action.payload
      });

    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        currentFilter: action.payload,
      });
  }

  return state;
};
