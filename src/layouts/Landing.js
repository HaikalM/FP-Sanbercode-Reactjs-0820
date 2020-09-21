import React from 'react'
import Navbar from '../components/landing/Navbar'
import Sidebar from '../components/dashboard/Sidebar'
import BreadcrumbLanding from '../components/landing/Breadcrumb'
import {Container} from 'react-bootstrap'
import LoginProvider from '../context/LoginContext'

const LandingLayout = (props) => {
	return(
		<>
			<LoginProvider>
				<Navbar/>
				<Container className="landing-body">
					{props.children}
				</Container>
			</LoginProvider>
		</>
	)
}

export default LandingLayout
