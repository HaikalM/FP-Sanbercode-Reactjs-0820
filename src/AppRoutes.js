import React from 'react'
import {Route, Switch} from 'react-router'
import DashboardPage from './pages/Dashboard'
import LandingPage from './pages/Landing'

const AppRoutes = () => {
	return(
		<Switch>
			<Route exact path='/' component={LandingPage}></Route>
			<Route exact path='/dashboard' component={DashboardPage}></Route>
		</Switch>
	)
}

export default AppRoutes
