import React from 'react';
import Search from '../Search';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { fireEvent } from '@testing-library/react-native'

const mockStore = configureMockStore();

test('Test Search', () => {
    const store = mockStore({books: {query: ''}});
    const { queryByTestId } = render(
        <Provider store={store}>
            <Search />
        </Provider>);
    expect(queryByTestId(/search-box/i)).toBeTruthy();
});