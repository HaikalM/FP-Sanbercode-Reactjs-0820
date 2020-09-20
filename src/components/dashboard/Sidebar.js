import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import '../../styles/component/Sidebar.scss'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import {IconContext} from 'react-icons'
import logo from '../../logo.svg'

const SideBar = () => {
	const [sidebar, setSidebar] = useState(true)
	const showSidebar = () => setSidebar(!sidebar)
	const [activeSidebarMenu, setActiveSidebarMenu] = useState('dashboard')
	const SidebarData = [
		{
			title: 'Home',
			page: 'home',
			path: '/',
			icon: <FiIcons.FiHome/>,
			cName: 'nav-text'
		}, {
			title: 'Dashboard',
			page: 'dashboard',
			path: '/dashboard',
			icon: <FiIcons.FiActivity/>,
			cName: 'nav-text'
		}, {
			title: 'Manage Movies',
			page: 'manage-movies',
			path: '/movies',
			icon: <FiIcons.FiMonitor/>,
			cName: 'nav-text'
		}, {
			title: 'Manage Games',
			page: 'manage-games',
			path: '/games',
			icon: <FiIcons.FiTarget/>,
			cName: 'nav-text'
		}
	]

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
			<nav className={sidebar ? 'sidebar nav-menu active' : 'sidebar nav-menu'}>
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
					{SidebarData.map((item, index) => {
						return(
							<li key={index} onClick={ () => {setActiveSidebarMenu(item.page)}}
							className={activeSidebarMenu === item.page ? `${item.cName} active` : item.cName}>
								<Link to={item.path} onClick={ () => {setActiveSidebarMenu(item.page)}}>
									{item.icon}
									<span onClick={ () => {setActiveSidebarMenu(item.page)}}>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default SideBar
