import React from 'react';

var UserForm = React.createClass({
  getInitialState: function() {
    console.log('UserForm getInitialState',this.props);
    return {name: '', email: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handleSubmit: function(e) {
    console.log('Submitted form!');
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    if (!name || !email) {
      return;
    }

    console.log(name,email);
    
    // console.log("REFS",this.refs);

    this.props.addUser(name,email);
    this.setState({name: '', email: ''});

    this.refs.userForm.reset();

    this.props.history.push('/');

  },
  render: function() {
    return (
      <form ref="userForm" className="userForm" onSubmit={this.handleSubmit}>
        <h4>Nuevo Usuario</h4>
        <p><input
          type="text"
          placeholder="Nombre"
          value={this.state.name}
          onChange={this.handleNameChange}
          ref="name"
        /></p>
        <p><input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          ref="email"
        /></p>
        <button type="submit">Enviar</button>
      </form>
    );
  }
});

export default UserForm;
