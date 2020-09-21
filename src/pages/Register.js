import React, {useState, useContext} from 'react'
import {Container,
	Card, Form,
	Row, Col,
	Button
} from 'react-bootstrap'
import LandingLayout from '../layouts/Landing'
import RegisterForm from '../components/landing/RegisterForm'
import {Link} from 'react-router-dom'

const RegisterPage = () => {
	return(
		<LandingLayout>
			<Row>
				<Col md={4} style={{margin: '0 auto'}}>
					<Card key='card-register' style={{margin: '0 auto'}}>
						<Card.Body>
							<h3 className='text-center mb-4'>Register Account</h3>
							<RegisterForm/>
							<p className='text-center'>Sudah punya akun <Link to='/login'>Login</Link></p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</LandingLayout>
	)
}

export default RegisterPage
