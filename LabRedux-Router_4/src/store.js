import { createBrowserHistory } from 'history'
import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
// import {browserHistory} from 'react-router';

// import the route reducer
import rootReducer from './reducers/index';
import {users,empresas} from './data/users';

const defaultState={
	users:users,
	empresas:empresas
};

export const history = createBrowserHistory();

// Para tool redux
const enhacers=compose(
	window.devToolsExtension?window.devToolsExtension():f=>f
);

// const store = createStore(rootReducer,defaultState,enhacers);

const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState
)

console.log('Store state:',store.getState());

// export const history = syncHistoryWithStore(browserHistory,store);

export default store