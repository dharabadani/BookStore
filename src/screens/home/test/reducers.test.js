import { initalState, books} from '../reducers';
import { REQUEST_BOOKS, RECEIVE_BOOKS, LOGGING_IN } from '../actionTypes';

test('Test initial state', () => {
    let input = {action: {type: ''}};
    const output = books(initalState, input);
    expect(output).toBe(initalState);
});

test('Test request books', () => {
    const output = books(initalState, {type: REQUEST_BOOKS, query: ''});
    expect(output.isFetching).toEqual(true);
    expect(output.query).toEqual('');
});

test('Test receive books', () => {
    const output = books(initalState, {type: RECEIVE_BOOKS, status: 'success', payload: {}});
    expect(output.error).toEqual('');
    expect(output.data).toEqual({});
});

test('Test receive books error', () => {
    const output = books(initalState, {type: RECEIVE_BOOKS, status: 'error', payload: 'Error'});
    expect(output.error).toEqual('Error');
    expect(output.data).toEqual({});
});

test('Test logging in', () => {
    const output = books(initalState, {type: LOGGING_IN, status: true});
    expect(output.loggedIn).toEqual(true);
});