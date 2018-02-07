// reducers takes in 2 things
// 1. the action (what happened)
// 2. a copy of current state

function postUsers(state=[], action){
	  // return the new state with the new comment
	  return [...state,{
	    id: state.length+1,
	    name: action.name,
	    email: action.email
	  }];
}

function users(state= {
	  isFetching: false,
	  didInvalidate: false,
	  data: []
	}, action){
	console.log('El usuario cambiará',state, action);

	switch(action.type){
		case 'ADD_USER':
			return {
				// Take the current state
				...state,
				// overwrite this use with a new one
				['data']:postUsers(state['data'],action)
			}
		case 'LOAD_USERS':
			console.log('Cargando usuarios...',state, action);
			return Object.assign({}, state, {
		        isFetching: true,
		        didInvalidate: false
		    })
		case 'RECEIVED_USERS':
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.users,
				lastUpdated: action.receivedAt
			})
		default:
		  return state;
	}

	return state;
}

export default users;