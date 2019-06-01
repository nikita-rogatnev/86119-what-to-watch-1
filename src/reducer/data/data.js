const initialState = {
  data: [],
  currentFilter: `All genres`,
};

export const ActionType = {
  'CHANGE_FILTER': `CHANGE_FILTER`,
  'GET_FILTERED_DATA': `GET_FILTERED_DATA`,
  'LOAD_DATA': `LOAD_DATA`,
};

export const ActionCreators = {
  changeActiveGenre: (data) => {
    return {
      type: ActionType.CHANGE_FILTER,
      payload: data,
    };
  },

  getFilteredData: (data) => {
    return {
      type: ActionType.GET_FILTERED_DATA,
      payload: data
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
      id: dataItem.id,
      name: dataItem.name,
      genre: dataItem.genre,
      previewImageSrc: dataItem[`preview_image`],
      previewVideoSrc: dataItem[`preview_video_link`]
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

    case ActionType.GET_FILTERED_DATA:
      return Object.assign({}, state, {
        currentFilter: action.payload,
      });
  }

  return state;
};
