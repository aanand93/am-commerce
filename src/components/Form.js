import React, { useState } from 'react';
import axios from 'axios';
import APIurl from '../config';
// import axios from 'axios';

function Form({ token }) {
	//  const [token, setToken] = useState(null);
	console.log(token);
	const [apparel, setApparel] = useState({ apparel_type: '', quantity: 0 });

	const handleChange = (event) => {
		setApparel({ ...apparel, [event.target.name]: event.target.value });
	};
	const data = {
		apparel_type: apparel.apparel_type,
		quantity: apparel.quantity,
		apparel_color: apparel.apparel_color,
		type_of_application: apparel.type_of_application,
		ink_color: apparel.ink_color,
		thread_color: apparel.thread_color,
		company_name: apparel.company_name,
		phone_number: apparel.phone_number,
		date_needed: apparel.date_needed,
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			url: `${APIurl}/clients`,
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},

			data,
		})
			.then(console.log)
			.catch(console.error);
	};

	// axios({
	// 	url: `${APIurl}/clients`,
	// 	method: 'POST',
	// 	header: {
	// 		Authorization: 'Bearer' + token,
	// 	},
	// })
	// 	.then((res) => res.json())
	// 	.catch(console.error);
	// console.log(token);

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
					<label for='apparel_color'>apparel_color </label>
					<input
						onChange={handleChange}
						name='apparel_color'
						value={apparel.apparel_color}
						placeholder='apparel_color'
					/>
					<label for='type_of_application'>type_of_application </label>
					<input
						onChange={handleChange}
						name='type_of_application'
						value={apparel.type_of_application}
						placeholder='type_of_application'
					/>
					<label for='ink_color'>ink_color </label>
					<input
						onChange={handleChange}
						name='ink_color'
						value={apparel.ink_color}
						placeholder='ink_color'
					/>
					<label for='thread_color'>thread_color </label>
					<input
						onChange={handleChange}
						name='thread_color'
						value={apparel.thread_color}
						placeholder='thread_color'
					/>
					<label for='company_name'>company_name </label>
					<input
						onChange={handleChange}
						name='company_name'
						value={apparel.company_name}
						placeholder='company_name'
					/>
					<label for='phone_number'>phone_number </label>
					<input
						onChange={handleChange}
						name='phone_number'
						value={apparel.phone_number}
						placeholder='phone_number'
					/>
					<label for='date_needed'>date_needed </label>
					<input
						onChange={handleChange}
						name='date_needed'
						value={apparel.date_needed}
						placeholder='date_needed'
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
