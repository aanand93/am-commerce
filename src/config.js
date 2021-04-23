const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:4000/api'
		: 'https://am-commerce-backend.herokuapp.com/api';

export default APIurl;

// const APIurl = "http://localhost:4000/api"

// export default APIurl;
