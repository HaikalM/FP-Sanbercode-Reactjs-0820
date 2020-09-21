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
import {GamesContext} from '../../../context/GamesContext'
import GamesDetailModal from './DetailModal'
import FormModal from './FormModal'

const DataTable = () => {
	const {games_data, selected_gameid, selected_game, show_detail_modal, show_form_modal, form_modal_type, form_input} = useContext(GamesContext)
	const [gamesData, setGamesData] = games_data
	const [selectedGameId, setSelectedGameId] = selected_gameid
	const [selectedGame, setSelectedGame] = selected_game
	const [showDetailModal, setShowDetailModal] = show_detail_modal
	const [showFormModal, setShowFormModal] = show_form_modal
	const [formModalType, setFormModalType] = form_modal_type
	const [formInput, setFormInput] = form_input

	const [searchValue, setSearchValue] = useState('')
	const [prevGamesData, setPrevGamesData] = useState([])
	const tesKonteks2 = useContext(GamesContext)

	const [searchInput, setSearchInput] = useState('')

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value)
	}

	const handleClearSearch = () => {
		setSearchInput('')
		setGamesData([...prevGamesData])
	}

	function searchGame(e){
		e.preventDefault()
		setPrevGamesData(gamesData)
		if(searchInput !== ''){
			let resultSearchGame = gamesData.filter(game => game.name.toLowerCase() == searchInput.toLowerCase())
			if(resultSearchGame.length > 0){
				setGamesData([...resultSearchGame])
			}
		}else{
			setGamesData([...prevGamesData])
		}
	}

	const handleGameDetail = (props) => {
		const gameId = props
		setSelectedGameId(props)
		setSelectedGame('')
		setShowFormModal(false)
		setShowDetailModal(true)
		let selectedGame = gamesData.find(game => game.id == gameId)
		console.log(selectedGame.name)
	}

	const handleCreateGame = () => {
		setSelectedGameId('')
		setSelectedGame('')
		setShowDetailModal(false)
		setShowFormModal(true)
		setFormModalType('create')
		setFormInput({
			id: null,
			name: '',
			genre: '',
			singlePlayer: 0,
			multiplayer: 0,
			platform: '',
			release: '',
			image_url: ''
		})
	}

	const handleEditGame = (props) => {
		const gameId = props
		setSelectedGameId(props)
		setSelectedGame('')
		setShowDetailModal(false)
		setShowFormModal(true)
		setFormModalType('edit')
		setFormInput({
			id: null,
			name: '',
			genre: '',
			singlePlayer: 0,
			multiplayer: 0,
			platform: '',
			release: '',
			image_url: ''
		})
	}

	return(
		<>
			<GamesDetailModal
				show={showDetailModal}
				onHide={() => setShowDetailModal(false)}
			/>
			<FormModal
				show={showFormModal}
				onHide={() => setShowFormModal(false)}
			/>
			<Row className='row justify-content-end mb-3'>
				<Col md={4}>
					<Form onSubmit={searchGame}>
						<InputGroup>
							<FormControl
								value={searchInput}
								placeholder="Search Games"
								aria-label="Gamew Title"
								aria-describedby="basic-addon2"
								onChange={handleSearchInput}
								className='border border-secondary'
							/>
							<InputGroup.Append>
								{searchInput.length > 0 &&
										<Button variant='outline-secondary' onClick={handleClearSearch}><FaIcons.FaTimes/></Button>
								}
								{searchInput.length == 0 &&
									<Button type='submit' variant='outline-secondary' onClick={searchGame}><FiIcons.FiSearch/></Button>
								}
							</InputGroup.Append>
						</InputGroup>
					</Form>
				</Col>
				<Col md={2}>
					<Button size='md' variant="primary" onClick={() => handleCreateGame()}>
						<FiIcons.FiPlus/> Add Games
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
							{gamesData.map((game, index) => {
								return(
									<tr key={index}>
										<td>
											<img src={game.image_url} width='100px' alt={game.name} className='rounded'/>
										</td>
										<td>
											<p> <b>ID : </b> {game.id} </p>
											<p> <b>Name : </b> {game.name} </p>
											<p> <b>Release: </b> {game.release} </p>
											<p> <b>Genre: </b> {game.genre} </p>
											<p> <b>Platform: </b> {game.platform} </p>
											<p> <b>Singleplayer: </b> {game.singlePlayer} </p>
											<p> <b>Multiplayer: </b> {game.multiplayer} </p>
										</td>
										<td style={{textAlign: 'right'}}>
											<Button
												onClick={() => handleGameDetail(game.id)}
												variant="secondary" className='mr-1'><FiIcons.FiEye/> Detail</Button>
											<Button
												onClick={() => handleEditGame(game.id)}
												variant="outline-info" className='mr-1'><FiIcons.FiEdit/></Button>
											<Button game_id={game.id} variant="outline-danger"><FiIcons.FiTrash/></Button>
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
