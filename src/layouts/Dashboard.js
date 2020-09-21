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
				{props.children}
			</div>
		</>
	)
}

export default DashboardLayout
