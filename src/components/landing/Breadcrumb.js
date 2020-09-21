import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Breadcrumb} from 'react-bootstrap'

const BreadcrumbBootstrap = () => {
	return(
		<Breadcrumb>
			<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
			<Breadcrumb.Item href="#" active>
				<Link to='/dashboard'>Dashboard</Link>
			</Breadcrumb.Item>
		</Breadcrumb>
	)
}

export default BreadcrumbBootstrap
