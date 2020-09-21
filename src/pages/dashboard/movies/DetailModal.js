import React, {useState, useContext, useEffect} from 'react'
import {Modal, Button, Row, Col} from 'react-bootstrap'
import {MoviesContext} from './MoviesContext'
import axios from 'axios'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'

const DetailModal = (props) => {
	const {movies_data, selected_movieid, selected_movie, show_detail_modal} = useContext(MoviesContext)
	const [selectedMovieId, setSelectedMovieId] = selected_movieid
	const [selectedMovie, setSelectedMovie] = selected_movie
	const [showDetailModal, setShowDetailModal] = show_detail_modal
	const movie = selectedMovie

	useEffect(() => {
		if(movie === ''){
			axios.get(`https://backendexample.sanbersy.com/api/data-movie/${selectedMovieId}`, {
				headers: {
					mode: "no-cors"
				}
			})
			.then(res=>{
				setSelectedMovie(res.data)
				console.log(res.data)
			})
		}
	})

	return(
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{movie.title} ({movie.year})
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col>
						<p className="text-muted"><b>Genre</b> : {movie.genre}</p>
						<p className="text-muted"><b>Duration</b> : {movie.duration} minutes</p>
					</Col>
					<Col className='row justify-content-end pr-4'>
						<div className="p-2">
							<FaIcons.FaStar style={{color: 'orange'}}/> {movie.rating}
						</div>
					</Col>
				</Row>
				<img
					src={movie.image_url}
					alt={movie.title}
					width="100%" height="400px"
					style={{ objectFit: 'cover' }}
					className='rounded'
				/>
				<p className='mt-2'>
					{movie.description}
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default DetailModal
