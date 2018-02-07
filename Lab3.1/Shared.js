function filterElements(query,field){
	return function(element) {
		console.log('entra',element,query,field);
		return ( element[field].toLowerCase().indexOf( query.toLowerCase() )>=0 ) ?true:false;
    }
	
}

export default filterElements;
