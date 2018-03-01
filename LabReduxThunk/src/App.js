import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreator from './actions/actionCreator';
import Main from './components/Main';

function mapStateToProps(state){
	return{
		users: state.users
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreator,dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;