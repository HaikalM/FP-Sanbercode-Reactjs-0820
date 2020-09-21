import React, {useContext} from 'react'
import {
	Card, CardColumns} from 'react-bootstrap'
import {MoviesContext} from '../context/MoviesContext'

const MoviesCard = () => {
	const {movies_data} = useContext(MoviesContext)
	const [moviesData] = movies_data

	return(
		<>
			<h3>Movies</h3>
			<CardColumns>
				{moviesData.map((movie, index) => {
					return(
						<Card>
							<Card.Img variant="top" src={movie.image_url} width='100px' height='250px' style={{ objectFit: 'cover' }} />
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
					)
				})}
			</CardColumns>
		</>
	)
}

export default MoviesCard
