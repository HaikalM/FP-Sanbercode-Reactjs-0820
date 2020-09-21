import React, {useState, useContext} from 'react'
import {Container,
	Button,
	Row, Col,
	Alert,
} from 'react-bootstrap'
import Navbar from '../components/landing/Navbar'
import BreadCrumb from '../components/landing/Breadcrumb'
import AlertBootstrap from '../components/Alert'
import MoviesCard from '../components/MoviesCard'
import MoviesProvider from '../context/MoviesContext'

const Landing = () => {
	const [showAlert, setShowAlert] = useState(true);
	const [modalShow, setModalShow] = useState(false);

	return(
		<>
			<Navbar/>
			<Container style={{marginTop: '20px'}}>
				{showAlert &&
					<AlertBootstrap
						variant="success"
						onClose={() => setShowAlert(false)}
						dismissible
					/>
				}
				<MoviesProvider>
					<MoviesCard/>
				</MoviesProvider>
			</Container>
		</>
	)
}

export default Landing
