// reducers takes in 2 things
// 1. the action (what happened)
// 2. a copy of current state

function postUsers(state=[], action){
	switch(action.type){
		case 'ADD_USER':
		  // return the new state with the new comment
		  return [...state,{
		    id: state.length+1,
		    name: action.name,
		    email: action.email
		  }];
		 case 'DEL_USER':
		 	console.log('Borrando usario...',state,action);
		 	const newData=[];
		 	for(var i=0;i<=state.length;i++){
		 		console.log('Revisando...',state[i],action.id);
		 		if(state[i] && parseInt(state[i].id)!=parseInt(action.id) ) newData.push(state[i]);
		 	}
	 		console.log('nuevo estado...',newData);

		 	return newData;

		default:
		  return state;
	}

	return state;
}

function users(state=[], action){
	console.log('El usuario cambiará...',state, action);
	
	return {
		// Take the current state
		...state,
		// overwrite this use with a new one
		['data']:postUsers(state['data'],action)
	}

	return state;
}

export default users;