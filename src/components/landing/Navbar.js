import React, {useContext} from 'react'
import {
	Navbar, Nav, NavDropdown,
	Form, FormControl,
	Button
} from 'react-bootstrap'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'
import {LoginContext} from '../../context/LoginContext'

const NavbarBootstrap = () => {
	const {user_data} = useContext(LoginContext)
	const [userData, setUserData] = user_data

	function handleLogout(){

	}

	return(
		<Navbar bg="dark" variant='dark' sticky='top'>
			<Navbar.Brand href="#home">
				<img
					alt=""
					src={logo}
					width="30"
					height="30"
					className="d-inline-block align-top"
				/>{' '}
				React Bootstrap
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto mr-5">
					{userData !== null && (
						<>
							<Link to='/' className='nav-link'>Home</Link>
							<Link to='/dashboard' className='nav-link'>Dashboard</Link>
						</>
					)}
					{userData === null && (
						<>
							<Link to='/login' className='nav-link'>Login</Link>
							<Link to='/register' className='nav-link'>Register</Link>
						</>
					)}
				</Nav>
					{userData !== null && (
						<Nav>
							<NavDropdown title={`Signed in as: ${userData.name}`} id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item onCLick={() => handleLogout}>Logout</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					)}
			</Navbar.Collapse>
		</Navbar>
	)

}

export default NavbarBootstrap
