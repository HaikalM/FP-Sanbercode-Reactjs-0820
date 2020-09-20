import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../../styles/component/Navbar.scss'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import {IconContext} from 'react-icons'
import logo from '../../logo.svg'

const SideBar = () => {
	const [sidebar, setSidebar] = useState(true)
	const [activePage, setActivePage] = useState('dashboard')
	const showSidebar = () => setSidebar(!sidebar)
	return(
		<>
			<div className="navbar">
				<div className="navbar-brand">
					<img
						alt=""
						src={logo}
						width="30"
						height="30"
					/>{' '}
					React Bootstrap
				</div>
				{!sidebar &&
					<Link to="#" className='menu-bars'>
						<FaIcons.FaBars onClick={showSidebar}/>
					</Link>
				}
				{sidebar &&
					<Link to="#" className='menu-bars top'>
						<FaIcons.FaTimes onClick={showSidebar}/>
					</Link>
				}
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items">
					<li className="navbar-toggle">
						<Link to='#' className='menu-bars'>
							<div className="navbar-brand">
								<img
									alt=""
									src={logo}
									width="30"
									height="30"
									className="d-inline-block align-top"
								/>{' '}
								React Bootstrap
							</div>
						</Link>
					</li>
					<li className="nav-text">
						<Link to='/' >
							<FiIcons.FiHome/>
							<span>Home</span>
						</Link>
					</li>
					<li className="nav-text">
						<Link to='/dashboard' onClick={() => setActivePage('dashboard')} className={(activePage == 'dashboard') ? 'active' : ''} >
							<FiIcons.FiActivity/>
							<span>Dasbhoard</span>
						</Link>
					</li>
					<li className="nav-text">
						<Link to='/' onClick={() => setActivePage('manage-movies')} className={(activePage == 'manage-movies') ? 'active' : ''} >
							<FiIcons.FiMonitor/>
							<span>Manage Movies</span>
						</Link>
					</li>
					<li className="nav-text">
						<Link to='#' onClick={() => setActivePage('manage-games')} className={(activePage == 'manage-games') ? 'active' : ''} >
							<FiIcons.FiTarget/>
							<span>Manage Games</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default SideBar
