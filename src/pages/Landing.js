import React, {useState} from 'react'
import {Container,
	Button,
	Row, Col,
	Alert,
} from 'react-bootstrap'
import VerticalModal from '../components/VerticalModal'
import BootstrapCard from '../components/Card'
import BreadCrumb from '../components/Breadcrumb'
import AlertBootstrap from '../components/Alert'
import NavbarBootstrap from '../components/Navbar'

const Landing = () => {
	const [showAlert, setShowAlert] = useState(true);
	const [modalShow, setModalShow] = useState(false);

	return(
		<>
			<NavbarBootstrap/>
			<Container style={{marginTop: '20px'}}>
				<BreadCrumb/>
				{!showAlert && <Button onClick={() => setShowAlert(true)}>Show Alert</Button>}
				{showAlert &&
					<AlertBootstrap
						variant="success"
						onClose={() => setShowAlert(false)}
						dismissible
					/>
				}
				<Container style={{paddingTop: '30px'}}>
					<Button variant="primary" onClick={() => setModalShow(true)}>
						Launch vertically centered modal
					</Button>
				</Container>
				<VerticalModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<BootstrapCard/>
				<Container>
					<h3>Setting column widths in Row</h3>
					<Row xs={1} md={2} lg={3}>
						<Col style={{backgroundColor: 'teal'}}>A1</Col>
						<Col style={{backgroundColor: 'orange'}}>A2</Col>
						<Col style={{backgroundColor: 'tomato'}}>A3</Col>
					</Row>
				</Container>

				<Container fluid='md'>
					<h3>Responsive Container</h3>
					<Row>
						<Col md={4, {order: 2}} style={{backgroundColor: 'red'}}>
							<Button variant="info" size="lg">Large</Button>
						</Col>
						<Col md={4, {order: 'first'}} style={{backgroundColor: 'blue'}}>
							<Button variant="danger" size="sm">Small</Button>
						</Col>
						<Col md={4, {order: 'last'}} style={{backgroundColor: 'green'}}>
							<Button variant="danger" size="sm">Small</Button>
						</Col>
					</Row>
				</Container>

				<Container>
					<h3>Span & Offset</h3>
					<Row>
						<Col md={{span: 3, offset: 1}} style={{backgroundColor: 'teal'}}>A1</Col>
						<Col md={{span: 3, offset: 1}} style={{backgroundColor: 'orange'}}>A2</Col>
						<Col md={{span: 3, offset: 1}} style={{backgroundColor: 'tomato'}}>A3</Col>
					</Row>
					<Row>
						<Col md={{span: 6, offset: 3}} style={{backgroundColor: 'orange'}}>A2</Col>
					</Row>
					<Row>
						<Col md={{span: 2, offset: 2}} style={{backgroundColor: 'tomato'}}>A3</Col>
					</Row>
				</Container>
			</Container>
		</>
	)
}

export default Landing
