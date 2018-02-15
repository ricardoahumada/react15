import React from 'react';

var UserForm = React.createClass({
  getInitialState: function() {
    return {name: '', email: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    if (!name || !email) {
      return;
    }

    console.log(name,email);
    
    this.props.onUserSubmit({name: name, email: email});
    this.setState({name: '', email: ''});
    this.props.history.pushState(null,'/');
  },
  render: function() {
    console.log('UserForm',this.props);

    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <h2>Nuevo Usuario</h2>
        <p><input
          type="text"
          placeholder="Nombre"
          value={this.state.name}
          onChange={this.handleNameChange}
        /></p>
        <p><input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        /></p>
        <button type="submit">Enviar</button>
      </form>
    );
  }
});

export default UserForm;
