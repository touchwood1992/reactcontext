import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './common/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Footer from './common/Footer';

import AlertState from './context/alertState';
const App = () => {
	return (
		<AlertState>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' render={() => <Home />} />
					<Route exact path='/about' render={() => <About />} />
					<Route exact path='/contact' render={() => <Contact />} />
					<Route render={() => <Notfound />} />
				</Switch>
				<Footer />
			</Router>
		</AlertState>
	);
};
export default App;
