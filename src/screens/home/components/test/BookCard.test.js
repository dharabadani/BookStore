import React from 'react';
import { render } from "@testing-library/react";
import BookCard from '../BookCard';
import { BrowserRouter } from 'react-router-dom';

test('Test Book Card', () => {
    let volumeInfo = { volumeInfo: {
                       title: 'Title',
                       subtitle: 'Sub',
                       imageLinks: {thumbnail: ''},
                       description: 'Test'
                    }
                 }
    const { queryByTestId } = render(<BrowserRouter><BookCard book={volumeInfo} /></BrowserRouter>);
    expect(queryByTestId(/book/i)).toBeTruthy();
});