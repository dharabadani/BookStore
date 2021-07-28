import React from 'react';
import renderer from 'react-test-renderer';
import routes from '../routes';

test('Test Routes', () => {
    const routes = renderer.create(<routes />);
    expect(routes.toJSON()).toMatchSnapshot();
});