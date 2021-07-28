import React from 'react';
import Books from '../Books';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

test('Test Books', () => {
    const store = mockStore({books: {data:{items:[], totalItems:0}, isFetching:false, query:'', error:''}});
    const { queryByTestId } = render(
        <Provider store={store}>
            <Books />
        </Provider>);
    expect(queryByTestId(/header/i)).toBeTruthy();
});

test('Test Fetch', () => {
    const store = mockStore({books: {data:{items:[], totalItems:0}, isFetching:true, query:'', error:''}});
    const { queryByTestId } = render(
        <Provider store={store}>
            <Books />
        </Provider>);
    expect(queryByTestId(/fetch/i)).toBeTruthy();
});

test('Test Error', () => {
    const store = mockStore({books: {data:{items:[], totalItems:0}, isFetching:false, query:'', error:'Test'}});
    const { queryByTestId } = render(
        <Provider store={store}>
            <Books />
        </Provider>);
    expect(queryByTestId(/header/i)).toBe(null);
    expect(queryByTestId(/fetch/i)).toBe(null);
});