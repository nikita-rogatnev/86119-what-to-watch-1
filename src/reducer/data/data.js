const initialState = {
  data: [],
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
};

const ActionCreator = {
  loadData: (data) => {
    return {
      type: ActionType.LOAD_DATA,
      payload: data,
    };
  },
};

export const Operation = {
  loadData: () => (dispatch, _getState, api) =>
    api.get(`/films`)
      .then((response) => dispatch(ActionCreator.loadData(transformFilms(response.data)))),
};

export const reducer = (appState = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, appState, {
        data: [...payload],
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
