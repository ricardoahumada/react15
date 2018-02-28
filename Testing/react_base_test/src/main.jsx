import React from 'react'
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Component from './components/Component.jsx';

if (module.hot) {
  module.hot.accept();
}

const user = {uid:1,name:"Ricardo",email:"r@e.cat"};

function doneChange(txt) {
	console.log("doneChange:",txt);
}

ReactDOM.render(<Component user={user} doneChange={(txt) => doneChange(txt)}/>,document.getElementById('root'));