import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import DashboardRoutes from './DashboardRoutes'

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
			<AppRoutes/>
		</Router>
  );
}

export default App;
