import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import UserBox from './components/UserBox';
import UserForm from './components/UserForm';
import EmpresaBox from './components/EmpresaBox';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
	<Provider store={store}>
		<Router history={history} >
			<Route path="/" component={App}>
				<IndexRoute component={UserBox}></IndexRoute>
				<Route path="/form" component={UserForm}></Route>
				<Route path="/empresas" component={EmpresaBox}></Route>
			</Route>
		</Router>
	</Provider>
)


render(router,document.getElementById('root'));