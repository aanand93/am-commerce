import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className=' navbar bg-dark container'>
			<h1>
				<Link className='link' to='/'>
					Home
				</Link>
			</h1>
			{/* <h4><Link className = "link" to="/form">Form</Link></h4> */}
			<h4>
				<Link className='link' to='/apparel'>
					apparel
				</Link>
			</h4>
		</nav>
	);
};

export default Nav;
