import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Form from './components/Form'
import Apparel from  './components/Apparel'
import Signin from  './components/Signin'



function App() {
 const [user, setUser] = useState(null);
 const [token, setToken] = useState(null);

  return (
		<div className='App'>
			<Router>
				<Nav />
				<main>
					<Route path='/' component={Home} exact /> 
					<Route path='/Form' component={Form}  token={token}/>
					<Route path='/Apparel' component={Apparel} />
			
				</main>
			</Router>
		</div>
	);
}

export default App;
