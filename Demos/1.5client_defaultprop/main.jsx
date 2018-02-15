import React from 'react';
import {render} from 'react-dom';

import UserBox from './components/UserBox.jsx';

render(
  <UserBox headerProp="cambio de header..." contentProp="Nuevo contenido..."/>,
  document.getElementById('root')
);