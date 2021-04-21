import React, { useState } from 'react';

import APIurl from '../config';
// import axios from 'axios';

function Form({ token }) {
	//  const [token, setToken] = useState(null);
	const [apparel, setApparel] = useState({ apparel_type: '', quantity: 0 });

	const handleChange = (event) => {
		setApparel({ ...apparel, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`${APIurl}/clients`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(apparel),
		})
			.then((res) => {
				setApparel({ apparel_type: '', quantity: 0 });
			})
			.catch(console.error);
	};

	return (
		<div>
			<div>
				<form onSubmit={handleSubmit} className='create-form'>
					<label for='apparel'>Apparel Type</label>
					<input
						onChange={handleChange}
						name='apparel_type'
						value={apparel.apparel_type}
					/>
					<label for='quantity'>Quantity </label>
					<input
						onChange={handleChange}
						name='quantity'
						value={apparel.quantity}
					/>
					<button id='button' type='submit'>
						{' '}
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
