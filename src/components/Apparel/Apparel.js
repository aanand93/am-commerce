import React from 'react';
import './Apparel.css';
import { Link } from 'react-router-dom';
import Apparelitem from './Apparelitem'

function Apparel({apparel}) {
    
    return (
			<div className='card'>
				<h1>Check out our EPIC Apparel!</h1>
				<div className='cards__container'>
					<div className='cards__wrapper'>
						<ul className='cards__items'>
							<Apparelitem
								src='images/'
								text='One of our amazing shirts'
								label='Shirts'
								path='/form'
							/>
							<Apparelitem
								src=''
								text='Army Fatigue Hoodie'
								label='SweatShirt'
								path='/form'
							/>
						</ul>
						<ul className='cards__items'>
							<Apparelitem
								src=''
								text='Dad Hat'
								label='Hat'
								path='/form'
							/>
							<Apparelitem
								src=''
								text='Shirt'
								label='Adventure'
								path='/form'
							/>
							<Apparelitem
								src=''
								text=''
								label=''
								path='/sign-up' 
							/>
						</ul>
					</div>
				</div>
			</div>
		);
}
   

export default Apparel;