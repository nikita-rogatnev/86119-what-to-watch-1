import {reducer} from "./user";

describe(`User reducer`, () => {
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
