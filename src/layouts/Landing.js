import React from 'react'
import Navbar from '../components/landing/Navbar'
import Sidebar from '../components/dashboard/Sidebar'
import BreadcrumbLanding from '../components/landing/Breadcrumb'
import {Container} from 'react-bootstrap'

const LandingLayout = (props) => {
	return(
		<>
			<Navbar/>
			<Container>
				<div className="landing-body">
					{props.children}
				</div>
			</Container>
		</>
	)
}

export default LandingLayout
