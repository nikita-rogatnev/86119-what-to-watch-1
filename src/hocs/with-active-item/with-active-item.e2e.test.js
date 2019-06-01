import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem HOC e2e`, () => {
  it(`Should change activeItem on onChange`, () => {
    const wrappedComponent = shallow(<MockComponentWrapped
    />);

    wrappedComponent.props().onChange(`active-item`);
    expect(wrappedComponent.state(`activeItem`)).toEqual(`active-item`);
  });
});
