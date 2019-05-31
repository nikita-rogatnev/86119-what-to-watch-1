const initialState = {
  currentFilter: `All`,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
};

const ActionCreator = {
  changeCurrentFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  }),
};

export const reducer = (appState = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.CHANGE_FILTER:
      return Object.assign({}, appState, {
        currentFilter: payload,
      });
  }

  return appState;
};
