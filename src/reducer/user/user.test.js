import {reducer} from "./user";

describe(`User reducer`, () => {
  it(`Should requireAuthorization`, () => {
    expect(reducer({
      isAuthorizationRequired: false,
    }, {
      type: `REQUIRED_AUTHORIZATION`,
      payload: true,
    })).toEqual({
      isAuthorizationRequired: true,
    });
  });

  it(`Should loginStart`, () => {
    expect(reducer({
      userError: null,
      isLoading: false,
    }, {
      type: `LOGIN_START`,
      payload: true,
    })).toEqual({
      userError: null,
      isLoading: true,
    });
  });

  it(`Should loginUser`, () => {
    expect(reducer({
      user: undefined,
    }, {
      type: `LOGIN_USER`,
      payload: {
        data: {
          "id": 1,
          "avatar_url": `/wtw/static/avatar/5.jpg`,
          "email": `Oliver.conner@gmail.com`,
          "name": `Oliver.conner`,
        },
      },
    })).toEqual({
      "isAuthorizationRequired": false,
      "isLoading": false,
      "isLogged": true,
      "userError": null,
      "user": {
        id: 1,
        avatar: `https://es31-server.appspot.com/wtw/static/avatar/5.jpg`,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
      },
    });
  });

  it(`Should loginError`, () => {
    expect(reducer({
      userError: false,
    }, {
      type: `LOGIN_ERROR`,
      payload: true,
    })).toEqual({
      isAuthorizationRequired: true,
      isLoading: false,
      isLogged: false,
      userError: true,
    });
  });
});
