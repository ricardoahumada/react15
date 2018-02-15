import React from 'react';

var ModalAlertTimeout = React.createClass({
	componentDidMount(){
		setTimeout(()=> {
			// console.log("timeoutModal",this.refs.timeoutModal);
			let timeoutModal = this.refs.timeoutModal;
			$(timeoutModal).modal('show');
		}, 1000);
	},
	render() {
		return (
			<div>
			<h1>Trabajando con refs</h1>
			<div className="modal fade" ref='timeoutModal'>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="close"><span aria-hidden="true">×</span></button>
							<h4 className="modal-title">Timeout</h4>
						</div>
						<div className="modal-body">
							<p>Ha alcanzado el timeout. Por favor, inténtelo nuevamente!</p>
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
});

export default ModalAlertTimeout;