import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import {
	Container, Row, Col
} from 'react-bootstrap'
import '../styles/pages/Dashboard.scss'

const Dashboard = () => {
	return(
		<>
			<Sidebar/>
			<div className='dashboard-body'>
			</div>
		</>
	)
}

export default Dashboard
