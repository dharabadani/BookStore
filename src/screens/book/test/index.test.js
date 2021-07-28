import React from 'react';
import { render } from "@testing-library/react";
import Book from '../index';

test('Test Book', () => {
    let match = {
        params: {
            ID: 1,
        },
    };
    const { queryByTestId } = render(<Book match={match}/>);
    expect(queryByTestId(/book/i)).toBeTruthy();
});