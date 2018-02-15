import React from 'react';

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

const CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">Este es un comentario</Comment>
        <Comment author="Jordan Walke">Este es *otro* comentario</Comment>
      </div>
    );
  }
});

const CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hola mundo! soy el componente CommentForm.
      </div>
    );
  }
});

const Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span>{this.props.children}</span>
      </div>
    );
  }
});

export default CommentBox;
