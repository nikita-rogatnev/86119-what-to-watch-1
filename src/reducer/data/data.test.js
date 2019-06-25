import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operations, ActionCreators} from "./data";

describe(`Data reducer`, () => {
  it(`Should return initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual({
      data: [],
      dataPromo: {},
      dataFavorites: [],
      dataItemCurrent: {},
      dataItemReviews: [],
      currentFilter: `All genres`,
    });
  });

  it(`Should changeCurrentFilter`, () => {
    expect(reducer({
      currentFilter: `All genres`,
    }, {
      type: `CHANGE_FILTER`,
      payload: `Comedies`,
    })).toEqual({
      currentFilter: `Comedies`,
    });
  });

  it(`Should make a correct API GET call for data`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const dataLoader = Operations.loadData();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_DATA,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API GET call for promo data`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const dataLoader = Operations.loadData();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_DATA,
          payload: [{fake: true}],
        });
      });
  });
});
