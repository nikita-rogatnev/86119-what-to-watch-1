const initialState = {
  data: [],
  dataItemCurrent: {},
  dataItemReviews: [],
  currentFilter: `All genres`,
};

export const ActionType = {
  "LOAD_DATA": `LOAD_DATA`,
  "LOAD_DATA_REVIEWS": `LOAD_DATA_REVIEWS`,
  "CHANGE_FILTER": `CHANGE_FILTER`,
  "CHANGE_DATA_ACTIVE": `CHANGE_DATA_ACTIVE`,
  "CHANGE_FAVORITE": `CHANGE_FAVORITE`,
  "UPDATE_DATA_FAVORITES": `UPDATE_DATA_FAVORITES`,
};

export const ActionCreators = {
  loadData: (data) => {
    return {
      type: ActionType.LOAD_DATA,
      payload: data,
    };
  },

  loadDataItemReviews: (data) => {
    return {
      type: ActionType.LOAD_DATA_REVIEWS,
      payload: data,
    };
  },

  changeCurrentFilter: (data) => {
    return {
      type: ActionType.CHANGE_FILTER,
      payload: data,
    };
  },

  changeDataItemCurrent: (id) => {
    return {
      type: ActionType.CHANGE_DATA_ACTIVE,
      payload: id,
    };
  },

  setToFavorites: (data) => {
    return {
      type: ActionType.UPDATE_DATA_FAVORITES,
      payload: data,
    };
  },
};

export const Operations = {
  loadData: () => (dispatch, getState, api) => {
    return api
      .get(`/films`)
      .then((response) => dispatch(ActionCreators.loadData(response.data)));
  },

  loadDataItemReviews: (id) => (dispatch, getState, api) => {
    return api
      .get(`/comments/${id}`)
      .then((response) => dispatch(ActionCreators.loadDataItemReviews(response.data)));
  },

  setToFavorites: (data) => (dispatch, getState, api) => {
    return api
      .post(`/favorite/${data.id}/${data.isFavorite ? 1 : 0}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreators.setToFavorites(response.data));
        }
      });
  },
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
        data: mapData(action.payload),
      });

    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        currentFilter: action.payload,
      });

    case ActionType.CHANGE_DATA_ACTIVE:
      return Object.assign({}, state, {
        dataItemCurrent: state.data.find((item) => item.id === action.payload),
      });

    case ActionType.LOAD_DATA_REVIEWS:
      return Object.assign({}, state, {
        dataItemReviews: action.payload,
      });

    case ActionType.UPDATE_DATA_FAVORITES:
      const objIndex = state.data.findIndex((item) => item.name === action.payload.name);

      const updatedItem = {
        ...state.data[objIndex],
        isFavorite: action.payload.is_favorite,
      };

      const updatedData = [
        ...state.data.slice(0, objIndex),
        updatedItem,
        ...state.data.slice(objIndex + 1),
      ];

      return Object.assign({}, state, {
        data: updatedData,
      });
  }

  return state;
};
