import React from 'react'
import DashboardLayout from '../../layouts/Dashboard'
import {
	Card, Table, Button,
	InputGroup, FormControl,
	Row, Col
} from 'react-bootstrap'
import GamesProvider from '../../context/GamesContext'

import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import DataTable from './games/DataTable'

const GamesIndex = () => {
	return(
		<GamesProvider>
			<DashboardLayout>
				<h3 className='mb-5'>Games</h3>
				<DataTable/>
			</DashboardLayout>
		</GamesProvider>
	)
}

export default GamesIndex
