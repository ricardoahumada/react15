import React from 'react';
import PropTypes from 'prop-types';

class UserForm extends React.Component{
  constructor(props) {
    super(props);
    /*this.contextTypes = {
      router: PropTypes.object.isRequired
    };*/
    this.state={name: '', email: ''};
  }

  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    };
  }
  
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    if (!name || !email) {
      return;
    }

    console.log(name,email);
    
    this.props.onUserSubmit({name: name, email: email});
    this.setState({name: '', email: ''});
    // this.props.history.push('/');
    this.context.router.history.push('/');

  }

  render() {
    console.log('UserForm',this.props,"CONTEXT:",this.context.router);

    return (
      <form className="userForm" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Nuevo Usuario</h2>
        <p><input
          type="text"
          placeholder="Nombre"
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)}
        /></p>
        <p><input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange.bind(this)}
        /></p>
        <button type="submit">Enviar</button>
      </form>
    );
  }
};


export default UserForm;
