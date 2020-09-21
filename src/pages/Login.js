import React from 'react'
import {Container,
	Card,
	Row, Col,
} from 'react-bootstrap'
import LandingLayout from '../layouts/Landing'
import LoginForm from '../components/landing/LoginForm'
import {Link} from 'react-router-dom'

const LoginPage = () => {
	return(
		<LandingLayout>
			<Row>
				<Col md={4} style={{margin: '0 auto'}}>
					<Card key='card-login' style={{margin: '0 auto'}}>
						<Card.Body>
							<h3 className='text-center mb-4'>Login</h3>
							<LoginForm/>
							<p className='text-center'>Belum punya akun <Link to='/register'>Register</Link></p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</LandingLayout>
	)
}

export default LoginPage
