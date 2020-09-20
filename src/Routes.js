import React from 'react'
import {Route, Switch} from 'react-router'
import LandingPage from './pages/Landing'
import DashboardIndex from './pages/DashboardIndex'

import MoviesIndex from './pages/dashboard/MoviesIndex'
import GamesIndex from './pages/dashboard/GamesIndex'

const Routes = () => {
	return(
		<Switch>
			<Route exact path='/' component={LandingPage}></Route>
			<Route exact path='/dashboard' component={DashboardIndex}></Route>
			<Route exact path='/movies' component={MoviesIndex}></Route>
			<Route exact path='/games' component={GamesIndex}></Route>
		</Switch>
	)
}

export default Routes
