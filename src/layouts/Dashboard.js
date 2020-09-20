import React from 'react'
import '../styles/pages/Dashboard.scss'
import Sidebar from '../components/dashboard/Sidebar'
import BreadcrumbDashboard from '../components/dashboard/Breadcrumb'

const DashboardLayout = (props) => {
	return(
		<>
			<Sidebar/>
			<div className="dashboard-body">
				<BreadcrumbDashboard/>
				<h2>Dashboard Layout</h2>
				{props.children}
			</div>
		</>
	)
}

export default DashboardLayout
