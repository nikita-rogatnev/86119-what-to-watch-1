const initialState = {
  data: [],
  currentFilter: `All genres`,
};

export const ActionType = {
  'CHANGE_FILTER': `CHANGE_FILTER`,
  'LOAD_DATA': `LOAD_DATA`,
};

export const ActionCreators = {
  changeActiveGenre: (data) => {
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
};

export const Operations = {
  loadData: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreators.loadData(response.data)));
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
      videoLink: dataItem[`video_link`],
      previewVideoLink: dataItem[`preview_video_link`],
      description: dataItem[`description`],
      rating: dataItem[`rating`],
      scoresCount: dataItem[`scores_count`],
      director: dataItem[`director`],
      starring: dataItem[`starring`],
      runTime: dataItem[`run_time`],
      genre: dataItem[`genre`],
      released: dataItem[`released`],
      isFavorite: dataItem[`is_favorite`],
    };
  });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        data: mapData(action.payload)
      });

    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        currentFilter: action.payload,
      });
  }

  return state;
};
