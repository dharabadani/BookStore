import React from 'react';
import Header from '../Header';
import { render } from "@testing-library/react";

test('Test Header', () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId(/app-header/i)).toBeTruthy();
});