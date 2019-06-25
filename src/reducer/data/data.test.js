import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, ActionCreators, Operations} from "./data";

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
    const dataLoader = Operations.loadDataPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_DATA_PROMO,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API GET call for favorite data`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const dataLoader = Operations.loadDataFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, {fake: true});

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_DATA_FAVORITES,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct call for loadDataItemReviews`, () => {
    const action = ActionCreators.loadDataItemReviews(0);

    expect(action.type).toEqual(`LOAD_DATA_REVIEWS`);
  });

  it(`Should make a correct call postReview`, () => {
    const action = ActionCreators.postReview(0);

    expect(action.type).toEqual(`POST_REVIEW`);
  });

  it(`Should make a correct call setToFavorites`, () => {
    const action = ActionCreators.setToFavorites({fake: true});

    expect(action.type).toEqual(`UPDATE_DATA_FAVORITES`);
  });

  it(`Should make a correct call changeDataItemCurrent`, () => {
    const action = ActionCreators.changeDataItemCurrent(0);

    expect(action.type).toEqual(`CHANGE_DATA_ACTIVE`);
  });
});
