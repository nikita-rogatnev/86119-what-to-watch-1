const initialState = {
  isAuthorizationRequired: false,
  isLogged: false,
  userError: null,
  isLoading: false,
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOGIN_START: `LOGIN_START`,
  LOGIN_USER: `LOGIN_USER`,
  LOGIN_ERROR: `LOGIN_ERROR`
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },
  loginUser: (status) => {
    return {
      type: ActionType.LOGIN_USER,
      payload: status
    };
  },
  loginError: (error) => {
    return {
      type: ActionType.LOGIN_ERROR,
      payload: error
    };
  },
  loginStart: () => {
    return {
      type: ActionType.LOGIN_START,
      payload: null
    };
  }
};

export const Operations = {
  loginUser: (email, password) => (dispatch, _getState, api) => {
    dispatch(ActionCreator.loginStart());
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        dispatch(ActionCreator.loginUser(response));
      })
      .catch((err) => {
        dispatch(ActionCreator.loginError(err.response.data.error));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });

    case ActionType.LOGIN_START:
      return Object.assign({}, state, {
        userError: null,
        isLoading: true
      });

    case ActionType.LOGIN_USER:
      return Object.assign({}, state, {
        isLogged: true,
        isAuthorizationRequired: false,
        userError: null,
        isLoading: false,
        user: {
          id: action.payload.data[`id`],
          email: action.payload.data[`email`],
          name: action.payload.data[`name`],
          avatar: `https://es31-server.appspot.com/` + action.payload.data[`avatar_url`],
        },
      });

    case ActionType.LOGIN_ERROR:
      return Object.assign({}, state, {
        userError: action.payload,
        isAuthorizationRequired: true,
        isLogged: false,
        isLoading: false
      });
  }

  return state;
};
