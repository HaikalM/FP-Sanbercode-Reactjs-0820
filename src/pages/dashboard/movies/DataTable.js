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
import {MoviesContext} from '../../../context/MoviesContext'
import {LoginContext} from '../../../context/LoginContext'
import MoviesDetailModal from './DetailModal'
import FormModal from './FormModal'

const DataTable = () => {
	const {user_data} = useContext(LoginContext)
	const [userData, setUserData] = user_data
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

	const [searchInput, setSearchInput] = useState('')

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value)
	}

	const handleClearSearch = () => {
		setSearchInput('')
		setMoviesData([...prevMoviesData])
	}

	function searchMovie(e){
		e.preventDefault()
		setPrevMoviesData(moviesData)
		if(searchInput !== ''){
			let resultSearchMovie = moviesData.filter(movie => movie.title == searchInput)
			if(resultSearchMovie.length > 0){
				setMoviesData([...resultSearchMovie])
			}
		}else{
			setMoviesData([...prevMoviesData])
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
		//setSelectedMovie('')
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

	const handleDestroyMovie = (props) =>{
		let movieId = parseInt(props)
		axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${movieId}`,
			{
				headers: {
					mode: "no-cors",
					'Access-Control-Allow-Origin': '*',
					'Authorization': "Bearer " + userData.token,
					//'Content-Type': null
				}
			}
		).then(res=>{
			let newMoviesData = moviesData.filter(movie => movie.id !== movieId)
			setMoviesData([...newMoviesData])
		}).catch((err) => console.log(err))
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
					<Form onSubmit={searchMovie}>
						<InputGroup>
							<FormControl
								value={searchInput}
								placeholder="Search Movies"
								aria-label="Moview Title"
								aria-describedby="basic-addon2"
								onChange={handleSearchInput}
								className='border border-secondary'
							/>
							<InputGroup.Append>
								{searchInput.length > 0 &&
										<Button variant='outline-secondary' onClick={handleClearSearch}><FaIcons.FaTimes/></Button>
								}
								{searchInput.length == 0 &&
									<Button type='submit' variant='outline-secondary' onClick={searchMovie}><FiIcons.FiSearch/></Button>
								}
							</InputGroup.Append>
						</InputGroup>
					</Form>
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
											<Button
												onClick={() => handleDestroyMovie(movie.id)}
												variant="outline-danger"><FiIcons.FiTrash/></Button>
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
