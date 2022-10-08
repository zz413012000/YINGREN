import React from 'react';
import { Provider } from 'react-redux';
// import store from './ReduxStore';
import store from './store'

const ReduxWrapper = ({ element }) => (
    <Provider store={store}>{element}</Provider>
);

export default ReduxWrapper;