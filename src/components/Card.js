import React from 'react'
import {
	Container,
	Nav,
	Button,
	Card, CardColumns} from 'react-bootstrap'

const BootstrapCard = () => {
	return(
		<Container>
			<CardColumns>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title that wraps to a new line</Card.Title>
						<Card.Text>
							This is a longer card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="p-3">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
							erat a ante.
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional
							content.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card bg="primary" text="white" className="text-center p-3">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
							erat a ante.
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card className="text-center">
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional
							content.{' '}
						</Card.Text>
						<Card.Text>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img src="holder.js/100px160" />
				</Card>
				<Card className="text-right">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
							erat a ante.
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
						</Card.Text>
						<Card.Text>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardColumns>
			<Card>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item>
							<Nav.Link href="#first">Active</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#disabled" disabled>
								Disabled
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>Special title treatment</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default BootstrapCard
