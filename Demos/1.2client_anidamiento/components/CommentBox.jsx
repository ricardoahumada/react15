import React from 'react';

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

const CommentBox = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Comentarios</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

export default CommentBox;
