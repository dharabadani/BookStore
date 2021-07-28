import React from 'react';
import { render } from "@testing-library/react";
import Footer from '../Footer';

test('Test Footer', () => {
    const { queryByTestId } = render(<Footer />);
    expect(queryByTestId(/app-footer/i)).toBeTruthy();
});