import React from 'react'
import {Route, Switch} from 'react-router'
import DashboardPage from './pages/Dashboard'
import MoviesIndex from './pages/dashboard/MoviesIndex'
import GamesIndex from './pages/dashboard/GamesIndex'

const DashboardRoutes = () => {
	return(
		<Switch>
			<Route exact path='/dashboard' component={DashboardPage}></Route>
			<Route exact path='/movies' component={MoviesIndex}></Route>
			<Route exact path='/games' component={GamesIndex}></Route>
		</Switch>
	)
}

export default DashboardRoutes
