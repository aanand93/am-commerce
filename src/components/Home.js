import React, { useState } from 'react';
import Signup from './Signup';
import SignIn from './Signin';

const Home = ({ setToken }) => {
	const [user, setUser] = useState(null);

	return (
		<div>
			<h1>Home</h1>
			<Signup user={user} setUser={setUser} setToken={setToken} />
			<SignIn user={user} setUser={setUser} setToken={setToken} />
		</div>
	);
};

export default Home;
