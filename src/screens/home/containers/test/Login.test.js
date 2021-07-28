import React from 'react';
import Login from '../Login';
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

test('Test Login', () => {
    const store = mockStore({books: {username:'admin', password: 'passw0rd'}});
    const { queryByTestId } = render(
        <Provider store={store}>
            <Login />
        </Provider>);
    expect(queryByTestId(/username/i)).toBeTruthy();
});

test('Test Login Error', () => {
    const store = mockStore({books: {username:'admin', password: 'passwrd'}});
    const { getByTestId, queryByTestId } = render(
        <Provider store={store}>
            <Login />
        </Provider>);
    const input = getByTestId('submit');
    fireEvent.click(input);
    expect(queryByTestId(/username/i)).toBeTruthy();
    expect(queryByTestId(/error/i)).toBeTruthy();
});
