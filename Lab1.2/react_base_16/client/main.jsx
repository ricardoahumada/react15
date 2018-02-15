import React from 'react'
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Component from './components/Component.jsx';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Component />,document.getElementById('root'));