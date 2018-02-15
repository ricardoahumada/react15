import React from 'react';

const CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

const CommentList = React.createClass({
  render: function() {
    const commentNodes = this.props.data.map(
      function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      }
    );

    return (
      <div className="commentList">
        {commentNodes}
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
