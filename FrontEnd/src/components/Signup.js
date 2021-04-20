import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import SignOutPage from '../SignOutPage';
import APIurl from '../config.js';
import Form from './Form';

const Signup = ({ user, setUser, token, setToken }) => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const changeUserName = (event) => {
		setUserName(event.target.value);
	};

	const changeEmail = (event) => {
		setEmail(event.target.value);
	};

	const changePassword = (event) => {
		setPassword(event.target.value);
	};

	//sign up the user
	const signUpUser = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/signup`, {
				email: email,
				password: password,
				userName: userName,
			})
			.then((user) => {
				setUser(user.data);
				return user.data;
			}) //Sign in the user
			.then((user) => {
				axios
					.post(`${APIurl}/signin`, {
						email: user.email,
						password: password,
					})
					.then((res) => {
						setToken(res.data.token);
						console.log(res.data.token);
					});
			});
	};

	if (token) {
		return (
			<div>
				<h1>Enter your Custom Inquiry info </h1>
				<Form token={token} />
			</div>
		);
	} else {
		return (
			<div className='newForm'>
				<h1>Sign Up!</h1>
				<form>
					<b>USERNAME:</b>
					<br />
					<input
						type='text'
						name='userName'
						placeholder='Name'
						onChange={changeUserName}
					/>
					<br />
					<b>EMAIL:</b>
					<br />
					<input
						type='text'
						name='email'
						placeholder='Email'
						onChange={changeEmail}
					/>
					<br />
					<b>PASSWORD:</b>
					<br />
					<input
						type='text'
						name='password'
						placeholder='Password'
						onChange={changePassword}
					/>
					<br />
					<br />
					<button className='myButton' onClick={(event) => signUpUser(event)}>
						Sign Up!
					</button>
					<div>
						{' '}
						<h1></h1>{' '}
						<Link className='signIn' to='/signin'>
							Login Here!
						</Link>
					</div>
				</form>
				<br />
			</div>
		);
	}
};

export default Signup;
