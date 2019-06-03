const initialState = {
  isAuthorizationRequired: false,
};

const ActionType = {
  'REQUIRED_AUTHORIZATION': `REQUIRED_AUTHORIZATION`
};

const ActionCreators = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreators, ActionType};
