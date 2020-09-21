import React, {useState, useEffect, useContext} from 'react'
import {
	Row, Col,
	Card,
	Table, Button,
	Form, InputGroup, FormControl
} from 'react-bootstrap'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import axios from 'axios'
import {MoviesContext} from './MoviesContext'
import MoviesDetailModal from './DetailModal'
import FormModal from './FormModal'

const DataTable = () => {
	const {movies_data, selected_movieid, selected_movie, show_detail_modal, show_form_modal, form_modal_type, form_input} = useContext(MoviesContext)
	const [moviesData, setMoviesData] = movies_data
	const [selectedMovieId, setSelectedMovieId] = selected_movieid
	const [selectedMovie, setSelectedMovie] = selected_movie
	const [showDetailModal, setShowDetailModal] = show_detail_modal
	const [showFormModal, setShowFormModal] = show_form_modal
	const [formModalType, setFormModalType] = form_modal_type
	const [formInput, setFormInput] = form_input

	const [searchValue, setSearchValue] = useState('')
	const [prevMoviesData, setPrevMoviesData] = useState([])
	const tesKonteks2 = useContext(MoviesContext)

	function searchMovie(e){
		e.preventDefault()
		setPrevMoviesData(moviesData)
		const textCari = e.target.value
		if(textCari != ''){
			let resultSearchMovie = moviesData.filter(movie => movie.title == textCari)
			if(resultSearchMovie.length != 0){
				setSearchValue(textCari)
				setMoviesData([...resultSearchMovie])
			}
		}else{
			setMoviesData([...prevMoviesData])
			setSearchValue('')
		}
	}

	const handleMovieDetail = (props) => {
		const movieId = props
		setSelectedMovieId(props)
		setSelectedMovie('')
		setShowFormModal(false)
		setShowDetailModal(true)
		let selectedMovie = moviesData.find(movie => movie.id == movieId)
		console.log(selectedMovie.title)
	}

	const handleCreateMovie = () => {
		setSelectedMovieId('')
		setSelectedMovie('')
		setShowDetailModal(false)
		setShowFormModal(true)
		setFormModalType('create')
		setFormInput({
			id: null,
			image_url: '',
			title: '',
			duration: '',
			genre: '',
			year: '',
			description: '',
			rating: 0
		})
	}

	const handleEditMovie = (props) => {
		const movieId = props
		setSelectedMovieId(props)
		setSelectedMovie('')
		setShowDetailModal(false)
		setShowFormModal(true)
		setFormModalType('edit')
		setFormInput({
			id: null,
			image_url: '',
			title: '',
			duration: '',
			genre: '',
			year: '',
			description: '',
			rating: 0
		})
	}

	return(
		<>
			<MoviesDetailModal
				show={showDetailModal}
				onHide={() => setShowDetailModal(false)}
			/>
			<FormModal
				show={showFormModal}
				onHide={() => setShowFormModal(false)}
			/>
			<Row className='row justify-content-end mb-3'>
				<Col md={4}>
					<InputGroup>
						<FormControl
							placeholder="Search Movies"
							aria-label="Moview Title"
							aria-describedby="basic-addon2"
							onChange={searchMovie}
						/>
						<InputGroup.Append>
							<InputGroup.Text id="basic-addon2"><FiIcons.FiSearch/></InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Col>
				<Col md={2}>
					<Button size='md' variant="primary" onClick={() => handleCreateMovie()}>
						<FiIcons.FiPlus/> Add Movies
					</Button>
				</Col>
			</Row>
			<Card>
				<Card.Body>
					<Table striped hover responsive >
						<thead>
							<tr>
								<th scope="col">Thumbnail</th>
								<th scope="col">Information</th>
								<th scope="col" style={{textAlign: 'right'}}>Action</th>
							</tr>
						</thead>
						<tbody>
							{moviesData.map((movie, index) => {
								return(
									<tr key={index}>
										<td>
											<img src={movie.image_url} width='100px' alt={movie.title} className='rounded'/>
										</td>
										<td>
											<p> <b>ID : </b> {movie.id} </p>
											<p> <b>Title : </b> {movie.title} </p>
											<p> <b>Year: </b> {movie.year} </p>
											<p> <b>Genre: </b> {movie.genre} </p>
											<p> <b>Rating: </b> {movie.rating} </p>
											<p> <b>Description: </b>
												{movie.description !== null &&
													movie.description.substring(0, 20)
												} ...
											</p>
										</td>
										<td style={{textAlign: 'right'}}>
											<Button
												onClick={() => handleMovieDetail(movie.id)}
												variant="secondary" className='mr-1'><FiIcons.FiEye/> Detail</Button>
											<Button
												onClick={() => handleEditMovie(movie.id)}
												variant="outline-info" className='mr-1'><FiIcons.FiEdit/></Button>
											<Button movie_id={movie.id} variant="outline-danger"><FiIcons.FiTrash/></Button>
										</td>
									</tr>
								)

							})}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>
	)
}

export default DataTable
