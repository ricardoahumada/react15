import React from 'react';
import {render} from 'react-dom';

import { Router, Route,IndexRoute, Link, browserHistory } from 'react-router';

import Main from './components/Main.jsx';
import UserBox from './components/UserBox.jsx';
import UserForm from './components/UserForm.jsx';

const router = (
	<Router history={browserHistory} >
		<Route path="/" component={Main}>
			<IndexRoute component={UserBox}></IndexRoute>
			<Route path="/new" component={UserForm}></Route>
		</Route>
	</Router>
)

render(
  router,
  document.getElementById('root')
);