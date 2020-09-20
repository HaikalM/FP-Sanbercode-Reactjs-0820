import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
import '../../styles/component/Breadcrumb.scss'

const BreadcrumbDashboard = () => {
	return(
		<Breadcrumb className='display-block'>
			<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
			<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
				Library
			</Breadcrumb.Item>
			<Breadcrumb.Item active>Data</Breadcrumb.Item>
		</Breadcrumb>
	)
}

export default BreadcrumbDashboard
