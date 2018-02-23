import React from 'react'
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Component from './components/Component.jsx';

if (module.hot) {
  module.hot.accept();
}

const user = {uid:1,name:"Ricardo",email:"r@e.cat"};

ReactDOM.render(<Component user={user}/>,document.getElementById('root'));