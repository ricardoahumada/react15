// reducers takes in 2 things
// 1. the action (what happened)
// 2. a copy of current state

function postEmpresas(state=[], action){
	switch(action.type){
		case 'ADD_EMPRESA':
		  // return the new state with the new comment
		  return [...state,{
		    id: state.length+1,
		    name: action.name,
		  }];
		 case 'DEL_EMPRESA':
		 	console.log('Borrando datos...',state,action);
		 	const newData=[];
		 	for(var i=0;i<=state.length;i++){
		 		console.log('Revisando...',state[i],action.id);
		 		if(state[i] && parseInt(state[i].id)!=parseInt(action.id) ) newData.push(state[i]);
		 	}
	 		console.log('nuevo estado...',newData);

		 	return newData;

		case 'DEL_USER':
		 	console.log('Borrando datos usuario en empresa...buscar y eliminar las referencias del ',state,action);

		  	const newData2=[];
		 	for(var i=0;i<=state.length;i++){
		 		console.log('Revisando...',state[i],action.id);
		 		if(state[i] && parseInt(state[i].usuario)!=parseInt(action.id) ) newData2.push(state[i]);
		 	}
	 		console.log('nuevo estado empresa...',newData2);

		 	return newData2;

		default:
		  return state;
	}

	return state;
}

function empresas(state=[], action){
	console.log('La empresa cambiará',state, action);
	
	return {
		// Take the current state
		...state,
		// overwrite this use with a new one
		['data']:postEmpresas(state['data'],action)
	}

	return state;
}

export default empresas;