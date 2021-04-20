import React, { useState } from 'react';
import Signup from './Signup';

const Home = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	return (
		<div>
			<h1>Home</h1>
			<Signup user={user} setUser={setUser} setToken={setToken} token={token} />
		</div>
	);
};

export default Home;
