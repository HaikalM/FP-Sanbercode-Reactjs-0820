import React from 'react'
import {Container,
	Card, Form,
	Row, Col,
	Button
} from 'react-bootstrap'
import LandingLayout from '../layouts/Landing'

const RegisterPage = () => {
	return(
		<LandingLayout>
			<Row>
				<Col md={4} style={{margin: '0 auto'}}>
					<Card style={{margin: '0 auto'}}>
						<Card.Body>
							<h3 className='text-center mb-4'>Register Account</h3>
							<Form.Group className='mb-0'>
								<Form.Label className='mb-0'>Name</Form.Label>
								<Form.Control type="text" placeholder="Maulana Haikal" />
							</Form.Group>
							<Form.Group className='mb-0'>
								<Form.Label className='mb-0'>Email address</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" />
							</Form.Group>
							<Form.Group>
								<Form.Label className='mb-0'>Password</Form.Label>
								<Form.Control type="password" name="password"/>
							</Form.Group>
							<Form.Group>
								<Button variant='primary' size='md' className='btn-block'>Register</Button>
							</Form.Group>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</LandingLayout>
	)
}

export default RegisterPage
