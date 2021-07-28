import React from 'react';
import axios from 'axios';
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  LOGGING_IN
} from '../actionTypes';
import { requestBooks,receiveBooks,logIn,getBooks } from '../actions.js';

jest.mock('axios');

test('Test requestBooks', () => {
    const query = 'Test';
    const expectedAction = {
        type: REQUEST_BOOKS,
        query: query
    };
    expect(requestBooks(query)).toEqual(expectedAction);
});

test('Test receiveBooks', () => {
    const status = true;
    const payload = {};
    const expectedAction = {
        type: RECEIVE_BOOKS,
        status,
        payload
    };
    expect(receiveBooks({status, payload})).toEqual(expectedAction);
});

test('Test logIn', () => {
    const status = true;
    const expectedAction = {
        type: LOGGING_IN,
        status
    };
    expect(logIn(status)).toEqual(expectedAction);
});

test('Test getBooks', () => {
    const resp = {data: 'Test'};
    const query = 'Test';
    axios.get.mockResolvedValueOnce({ status: 200, data: 'Test' });
    getBooks(query)(jest.fn);
    expect(axios.get).toHaveBeenCalled();
});