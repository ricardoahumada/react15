import React from 'react'
import PropTypes from 'prop-types'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreator from './actions/actionCreator';

import Main from './components/Main'

function mapStateToProps(state){
	console.log('mapStateToProps...');
	return{
		users: state.users,
		empresas:state.empresas
	}
}

function mapDispatchToProps(dispatch){
	console.log('mapDispatchToProps...',dispatch);
	return bindActionCreators(actionCreator,dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;