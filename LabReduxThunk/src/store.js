import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore,compose,applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import { fetchUsers } from './actions/actionCreator'

// import the route reducer
import rootReducer from './reducers/index';

// import users from './data/users';

// console.log('Usuarios:',users);

// create object for default data
const defaultState={
	users:[],
};

// Para tool redux
const enhacers=compose(
	window.devToolsExtension?window.devToolsExtension():f=>f
);

const loggerMiddleware = createLogger();

const store = createStore(rootReducer,applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ));


export const history = syncHistoryWithStore(browserHistory,store);

export default store