import React, {useState, useContext, useEffect} from 'react'
import {
	Modal, Button,
	Form, Row, Col,
	FormControl
} from 'react-bootstrap'
import {MoviesContext} from './MoviesContext'
import axios from 'axios'
import '../../../styles/component/Form.scss'
import * as FiIcons from 'react-icons/fi'

const FormModal = (props) => {
	const {movies_data, selected_movieid, selected_movie, show_detail_modal, show_form_modal, form_modal_type, form_input} = useContext(MoviesContext)
	const [moviesData, setMoviesData] = movies_data
	const [selectedMovieId, setSelectedMovieId] = selected_movieid
	const [selectedMovie, setSelectedMovie] = selected_movie
	const movie = selectedMovie

	const [showFormModal, setShowFormModal] = show_form_modal
	const [formModalType, setFormModalType] = form_modal_type

	const [formInput, setFormInput] = form_input

	useEffect( () => {
		if(formModalType === 'edit'){
			if(movie === ''){
				axios.get(`https://backendexample.sanbersy.com/api/data-movie/${selectedMovieId}`, {
					headers: {
						mode: "no-cors"
					}
				})
				.then(res=>{
					setFormModalType('edit')
					setSelectedMovie(res.data)
					const movie = res.data
					setFormInput({
						id: movie.id,
						image_url: movie.image_url,
						title: movie.title,
						duration: movie.duration,
						genre: movie.genre,
						year: movie.year,
						description: movie.description,
						rating: movie.rating
					})
				})
			}
		}
	})

	function handleChange(e){
		let inputName = e.target.name
		switch(inputName){
			case 'image-url':{
				setFormInput({...formInput, image_url: e.target.value})
				break
			}
			case 'title':{
				setFormInput({...formInput, title: e.target.value})
				break
			}
			case 'duration':{
				setFormInput({...formInput, duration: e.target.value})
				break
			}
			case 'genre':{
				setFormInput({...formInput, genre: e.target.value})
				break
			}
			case 'year':{
				setFormInput({...formInput, year: e.target.value})
				break
			}
			case 'rating':{
				setFormInput({...formInput, rating: e.target.value})
				break
			}
			case 'description':{
				setFormInput({...formInput, description: e.target.value})
				break
			}
			default: {break}
		}
		console.log(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()
		if(formModalType === 'create'){
			if(movie === ''){

			}
			console.log('running create data')
		}else if(formModalType === 'edit'){
			if(movie !== ''){
				console.log('running edit data')
			}
		}
	}

	return(
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{formModalType} Movies
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='p-5'>
				<Form onSubmit={handleSubmit} className="form-container">
					<Row>
						<Col md={3}>
							<label htmlFor="image-url">Link Cover Film</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.image_url}
								name="image-url"
								type="text"
								placeholder="Image URL"
								aria-label="ImageURL"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="title">Judul Film</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.title}
								name="title"
								type="text"
								placeholder="Movie Title"
								aria-label="MovieTitle"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="duration">Durasi</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.duration}
								name="duration"
								type="text"
								placeholder="Duration"
								aria-label="MovieDuration"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="year">Tahun Tayang</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.year}
								name="year"
								type="number"
								placeholder="Year"
								aria-label="MovieYear"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="rating">Rating</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.rating}
								name="rating"
								type="number"
								placeholder="Rating"
								aria-label="MovieDuration"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="genre">Genre</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.genre}
								name="genre"
								type="text"
								placeholder="Genre"
								aria-label="MovieGenre"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="description">Deskripsi</label>
						</Col>
						<Col md={9}>
							<FormControl
								as='textarea'
								value={formInput.description}
								onChange={handleChange}
								name="description"
								placeholder="Deskripsi Film.." style={{height:'200px'}}></FormControl>
						</Col>
					</Row>
					<Row className='mt-2'>
						<Col md={3}>
						</Col>
						<Col md={9}>
							<Button
							type="submit"
							variant='success'
							className="rounded"><FiIcons.FiSave/> Simpan</Button>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default FormModal
