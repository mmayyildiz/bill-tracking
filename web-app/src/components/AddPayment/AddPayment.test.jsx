import React from 'react';
import AddPayment from './AddPayment';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';


const mockStore = configureStore();

const mockCallFunction = jest.fn();

const store = mockStore({
  createPayment: mockCallFunction
});

const wrapper = renderer.create(
  <Provider store={store}>
    <AddPayment />
  </Provider>
);

describe('AddPayment', () => {

   it('should render with given state from Redux store', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
   });

});
