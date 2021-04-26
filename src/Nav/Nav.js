import React, { useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import './Nav.css';

const Nav = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);


	return (
		<div>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo'>
						AM-Commerce <i class='fas fa-tshirt'></i>
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nave-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nave-item'>
							<Link
								to='/apparel'
								className='nav-links'
								onClick={closeMobileMenu}>
								Apparel
							</Link>
						</li>
						<li className='nave-item'>
							<Link
								to='/about-us'
								className='nav-links'
								onClick={closeMobileMenu}>
								About-us
							</Link>
						</li>
						<li className='nave-item'>
							<Link
								to='/sign-up'
								className='nav-links-mobile'
								onClick={closeMobileMenu}>
								sign-up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
				</div>
			</nav>
		</div>
	);
};

export default Nav;
