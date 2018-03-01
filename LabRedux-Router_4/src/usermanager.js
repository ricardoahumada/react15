import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';

import {Provider} from 'react-redux';

import App from './App';


import store, {history} from './store';

if (module.hot) {
  module.hot.accept();
}

const AppMngr = () => (
	<Provider store={store}>
		<App history={history}/>
	</Provider>
)

ReactDOM.render(<AppMngr />, document.getElementById('root'));
