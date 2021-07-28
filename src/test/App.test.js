import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { store, history } from '../configureStore';
import routes from '../routes';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createRootReducer from '../rootReducer'

jest.mock('../configureStore', () => {
    return {
        store: {subscribe: jest.fn(), dispatch: jest.fn(), getState: jest.fn()},
        history: {listen: jest.fn(), action: '', location: {}, push: jest.fn()}
    }
});
jest.mock('../rootReducer')
jest.mock('../routes', () => {
    return (
        <div></div>
    );
});

test('Test App', () => {
    const { store } = require('../configureStore');
    const { history } = require('../configureStore');
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
});