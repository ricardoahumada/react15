import 'babel-polyfill'
import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import UserBox from './components/UserBox';
import UserForm from './components/UserForm';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import store, {history} from './store';
import { fetchUsers } from './actions/actionCreator'

const router = (
	<Provider store={store} url="api/users.json">
		<Router history={history} >
			<Route path="/" component={App}>
				<IndexRoute component={UserBox}></IndexRoute>
				<Route path="/form" component={UserForm}></Route>
			</Route>
		</Router>
	</Provider>
)


render(router,document.getElementById('root'));

store.dispatch(
	fetchUsers('api/users.json')).then(() =>{
	  console.log('fetchedUsers then:',store.getState())
	}
)
