import fetch from 'isomorphic-fetch'

// add user
export function addUser(name, email){
	console.log("Dispatching add User");
	return {
		type:'ADD_USER',
		name,
		email
	}
}

function loadUsers(url){
	console.log("Loading users from...:",url);
	return{
		type:'LOAD_USERS',
		url
	}
}

function receiveUsers(url,json) {
	console.log("Recived users from...:",url,json);
  return {
    type: 'RECEIVED_USERS',
    url,
    users: json.data,
    receivedAt: Date.now()
  }
}

// Async actions

export function fetchUsers(url) {
	console.log('fetchUsers:',url);

	return function (dispatch) {
		dispatch(loadUsers(url));

		return fetch(url)
		.then(response => response.json())
		.then(json =>{
			  	console.log('fetched:',json);
			    dispatch(receiveUsers(url, json))
			}
		);
	}

}