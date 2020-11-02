import React from 'react';
import UpdatePayment from './UpdatePayment';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

const mockCallFunction = jest.fn();
const mockStore = configureStore();
const store = mockStore({
  payment:   {
    "id": "2002",
    "name": "foo",
    "amount": "100",
    "startDate":"2020-10-29",
    "frequency": "Weekly"
  },
updatePayment: mockCallFunction
});

const wrapper = renderer.create(
  <Provider store={store}>
    <UpdatePayment />
  </Provider>
);

describe('UpdatePayment', () => {

    it('should render with given state from Redux store', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

});
