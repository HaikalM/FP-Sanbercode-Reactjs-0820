import React, {useState, useEffect} from 'react'
import {
	Row, Col,
	Card,
	Table, Button,
	Form, InputGroup, FormControl
} from 'react-bootstrap'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import axios from 'axios'

const DataTable = () => {
	const [searchValue, setSearchValue] = useState('')
	const [prevMoviesData, setPrevMoviesData] = useState([])
	const [moviesData, setMoviesData] = useState([])

	function searchMovie(e){
		e.preventDefault()
		setPrevMoviesData(moviesData)
		const textCari = e.target.value
		if(textCari != ''){
			let resultSearchMovie = moviesData.filter(movie => movie.title == textCari)
			if(resultSearchMovie.length > 0){
				setSearchValue(textCari)
				setMoviesData([...resultSearchMovie])
			}else{
				setSearchValue('')
				setMoviesData([...prevMoviesData])
			}
		}else{
			setSearchValue('')
			setMoviesData([...prevMoviesData])
		}
	}

	useEffect( () => {
		if(moviesData.length === 0 && searchValue === ''){
			axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
			.then(res=>{
				setMoviesData(res.data)
				console.log(res.data)
			})
		}
	})

	return(
		<>
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
					<Button size='md' variant="primary">
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
											<p> <b>Title : </b> {movie.title} </p>
											<p> <b>Year: </b> {movie.year} </p>
											<p> <b>Genre: </b> {movie.genre} </p>
											<p> <b>Rating: </b> {movie.rating} </p>
											<p> <b>Description: </b> {movie.description.substring(0, 50)} </p>
										</td>
										<td style={{textAlign: 'right'}}>
											<Button movie_id={movie.id} variant="secondary" className='mr-1'><FiIcons.FiEye/> Detail</Button>
											<Button movie_id={movie.id} variant="outline-info" className='mr-1'><FiIcons.FiEdit/></Button>
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
