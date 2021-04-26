import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import APIurl from '../config.js';

const SignIn = ({ setUser, setToken }) => {
	const history = useHistory();
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');
	const changeEmail = (event) => {
		setEmail(event.target.value);
	};

	const changePassword = (event) => {
		setPassword(event.target.value);
	};

	//Create sign in functionality so users can sign in
	//  so somehow get the correct user object and the token when the user signs in
	const signInUser = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/signin`, {
				email: email,
				password: password,
			})
			.then((tokenData) => {
				setToken(tokenData.data.token);
				history.push('/Form');
			});
	};

	return (
		<div className='login'>
			<h1>Sign In</h1>
			<form>
				<b>E-mail:</b>
				<br />
				<input
					type='email'
					name='email'
					placeholder='Email'
					onChange={changeEmail}
				/>
				<br />
				<b>Password:</b>
				<br />
				<input
					type='password'
					name='password'
					placeholder='Password'
					onChange={changePassword}
				/>
				<br />
				<button onClick={(event) => signInUser(event)}>Sign In!</button>
			</form>
			<br />
		</div>
	);
};

export default SignIn;
