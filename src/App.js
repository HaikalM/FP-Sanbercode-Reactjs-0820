import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'

import logo from './logo.svg';
import './App.scss';
import {Container,
	Button,
	Row, Col,
	Alert,
} from 'react-bootstrap'

function App() {
  return (
		<Router>
			<Routes/>
		</Router>
  );
}

export default App;
