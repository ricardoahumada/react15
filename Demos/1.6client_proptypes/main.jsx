import React from 'react';
import {render} from 'react-dom';

import UserBox from './components/UserBox.jsx';

render(
  <UserBox id={23} title="Grupo mail" />,
  document.getElementById('root')
);