import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Form from './components/Form'



function App() {
  return (
		<div className='App'>
			<Route path='/' component={Home} />
			<Route path='/:Nav' component={Nav} />
			<Route path='/:Form' component={Form} />
		</div>
	);
}

export default App;
