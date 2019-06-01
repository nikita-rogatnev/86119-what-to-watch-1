import {reducer} from './user.js';

describe(`user reducer`, () => {
  it(`Should return initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationRequired: false,
    });
  });

  it(`Should change isAuthorizationRequired to true`, () => {
    expect(reducer({
      isAuthorizationRequired: false,
    }, {
      type: `REQUIRED_AUTHORIZATION`,
      payload: true
    })).toEqual({
      isAuthorizationRequired: true,
    });
  });
});
