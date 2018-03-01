import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
	<nav>
		<Link to="/">Lista</Link> | <Link to="/new">Añadir</Link>	
	</nav>
)

export default NavBar
