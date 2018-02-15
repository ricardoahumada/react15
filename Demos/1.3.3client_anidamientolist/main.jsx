import React from 'react';
import {render} from 'react-dom';

import CommentBox from './components/CommentBox.jsx';

let data_comments = [
  {id: 1, author: "Pete Hunt", text: "Este es un comentario"},
  {id: 2, author: "Jordan Walke", text: "Este es *otro* comentario"}
];

render(
  <CommentBox data={data_comments}/>,
  document.getElementById('root')
);
