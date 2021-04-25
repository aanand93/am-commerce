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

	return (
		<div>
			<div>
				<form onSubmit={handleSubmit} className='create-form'>
					<label className='inputbox' for='apparel'>
						Apparel Type:
					</label>
					<input
						onChange={handleChange}
						name='apparel_type'
						value={apparel.apparel_type}
						placeholder='Shirts, hoodies, etc...'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='quantity'>
						Quantity:
					</label>
					<input
						onChange={handleChange}
						name='quantity'
						value={apparel.quantity}
						placeholder='How many items?'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='apparel_color'>
						Apparel Color:
					</label>
					<input
						onChange={handleChange}
						name='apparel_color'
						value={apparel.apparel_color}
						placeholder='Blue, Orange, Red, etc...'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='type_of_application'>
						Type of Application:
					</label>
					<input
						onChange={handleChange}
						name='type_of_application'
						value={apparel.type_of_application}
						placeholder='Screenprint/Embroidery'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='ink_color'>
						Ink Color:
					</label>
					<input
						onChange={handleChange}
						name='ink_color'
						value={apparel.ink_color}
						placeholder='Blue, Orange, Red, etc...'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='thread_color'>
						Thread Color:
					</label>
					<input
						onChange={handleChange}
						name='thread_color'
						value={apparel.thread_color}
						placeholder='Blue, Orange, Red, etc...'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='company_name'>
						Company Name:
					</label>
					<input
						onChange={handleChange}
						name='company_name'
						value={apparel.company_name}
						placeholder='Company Name'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='phone_number'>
						Phone Number:
					</label>
					<input
						onChange={handleChange}
						name='phone_number'
						value={apparel.phone_number}
						placeholder='3015552222'
						className='inputbox'
					/>
					<br />
					<label className='inputbox' for='date_needed'>
						Date Needed:
					</label>
					<input
						onChange={handleChange}
						name='date_needed'
						value={apparel.date_needed}
						placeholder='Date Needed'
						className='inputbox'
					/>
					<br />
					<button id='button' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
