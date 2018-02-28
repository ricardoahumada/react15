import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'

import Main from './components/Main.jsx';

if (module.hot) {
  module.hot.accept();
}

const App = () => (
  <BrowserRouter>
    <main>
      <Main />
    </main>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
