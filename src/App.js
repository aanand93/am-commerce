import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Form from './components/Form';
import Apparel from './components/Apparel';
import Signin from './components/Signin';
import aboutus from './components/aboutus';

function App() {
	const [token, setToken] = useState();

	return (
		<div className='App'>
			<Router>
				<Nav />
				<main>
					<Route path='/' component={Home} exact />
					<Route path='aboutus' component={aboutus}></Route>
					<Route path='/Form' render={() => <Form token={token} />} />
					<Route path='/Apparel' component={Apparel} />
				</main>
			</Router>
		</div>
	);
}

export default App;
