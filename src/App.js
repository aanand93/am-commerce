import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/indexs/Home';
import Nav from './Nav/Nav';
import Form from './components/Form';
import Apparel from './components/Apparel/Apparel';
import aboutus from './components/about/aboutus';
import Signup from './components/Signup';
import Signin from './components/Signin';
function App() {
	const [token, setToken] = useState();
	const [user, setUser] = useState(null);
	return (
		<div className='App'>
			<Router>
				<Nav />
				<main>
					<Route path='/' exact component={Home} />
					<Route path='/Form' render={() => <Form token={token} />} />
					<Route path='/Apparel' component={Apparel} />
					<Route
						path='/sign-up'
						render={() => (
							<Signup user={user} setUser={setUser} setToken={setToken} />
						)}
					/>
					<Route
						path='/signin'
						render={() => (
							<Signin user={user} setUser={setUser} setToken={setToken} />
						)}
					/>
					<Route path='/about-us' component={aboutus} />
				</main>
			</Router>
		</div>
	);
}

export default App;
