import React from 'react'
import DashboardLayout from '../../layouts/Dashboard'
import {
	Card, Table, Button,
	InputGroup, FormControl,
	Row, Col
} from 'react-bootstrap'
import MoviesProvider from '../../context/MoviesContext'
import LoginProvider from '../../context/LoginContext'

import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import DataTable from './movies/DataTable'

const MoviesIndex = () => {
	return(
		<LoginProvider>
			<MoviesProvider>
				<DashboardLayout>
					<h3 className='mb-5'>Movies</h3>
					<DataTable/>
				</DashboardLayout>
			</MoviesProvider>
		</LoginProvider>
	)
}

export default MoviesIndex
