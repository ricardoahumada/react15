import React from 'react';
import {render} from 'react-dom';

let header = React.createElement('h1', null, 'This is the header');
let child1 = React.createElement('li', null, 'First Text Content');
let child2 = React.createElement('li', null, 'Second Text Content');
let root = React.createElement('ul', { className: 'my-list' }, header, child1, child2);

render(root, document.getElementById('root'));
