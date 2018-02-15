import React from 'react';

var FormComponent = React.createClass({
	handleSubmit(event) {
		console.log("Valores enviados: ", event.target.name.value, event.target.email.value);
		event.preventDefault();
	},
	render() {
		return (
			<div className="container">
				<h1>Componente de Formulario</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="formGroup">
						Nombre: <input name="name" type="text" defaultValue="Tu nombre"/>
					</div>
					<div className="formGroup">
						E-mail: <input name="email" type="mail" defaultValue="Tu email"/>
					</div>
					<button type="submit">Enviar</button>
				</form>
			</div>
		)
	}
});

export default FormComponent;