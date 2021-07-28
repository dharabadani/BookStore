import React from 'react';
import { render } from "@testing-library/react";
import Home from '../index';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

test('Test logged in Home', () => {
    const store = mockStore({books: {loggedIn: true}});
    const { queryByTestId } = render(
    <Provider store={store}>
        <Home />
    </Provider>);
    expect(queryByTestId(/home/i)).toBeTruthy();
});