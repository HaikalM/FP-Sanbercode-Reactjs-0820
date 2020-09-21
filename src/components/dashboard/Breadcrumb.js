import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../styles/component/Breadcrumb.scss'

const BreadcrumbDashboard = () => {
	return(
		<Breadcrumb>
			<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
			<Breadcrumb.Item href="#">
				<Link to='/dashboard'>Dashboard</Link>
			</Breadcrumb.Item>
			<Breadcrumb.Item active>Index</Breadcrumb.Item>
		</Breadcrumb>
	)
}

export default BreadcrumbDashboard
