import React, {useState, useContext, useEffect} from 'react'
import {
	Modal, Button,
	Form, Row, Col,
	FormControl
} from 'react-bootstrap'
import {GamesContext} from '../../../context/GamesContext'
import axios from 'axios'
import '../../../styles/component/Form.scss'
import * as FiIcons from 'react-icons/fi'

const FormModal = (props) => {
	const {games_data, selected_gameid, selected_game, show_detail_modal, show_form_modal, form_modal_type, form_input} = useContext(GamesContext)
	const [gamesData, setGamesData] = games_data
	const [selectedGameId, setSelectedGameId] = selected_gameid
	const [selectedGame, setSelectedGame] = selected_game
	const game = selectedGame

	const [showFormModal, setShowFormModal] = show_form_modal
	const [formModalType, setFormModalType] = form_modal_type

	const [formInput, setFormInput] = form_input

	useEffect( () => {
		if(formModalType === 'edit'){
			if(game === ''){
				axios.get(`https://backendexample.sanbersy.com/api/data-game/${selectedGameId}`, {
					headers: {
						mode: "no-cors"
					}
				})
				.then(res=>{
					setFormModalType('edit')
					setSelectedGame(res.data)
					const game = res.data
					setFormInput({
						id: game.id,
						name: game.name,
						genre: game.genre,
						singlePlayer: game.singlePlayer,
						multiplayer: game.multiplayer,
						platform: game.platform,
						release: game.release,
						image_url: game.image_url
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
			case 'name':{
				setFormInput({...formInput, name: e.target.value})
				break
			}
			case 'genre':{
				setFormInput({...formInput, genre: e.target.value})
				break
			}
			case 'release':{
				setFormInput({...formInput, release: e.target.value})
				break
			}
			case 'platform':{
				setFormInput({...formInput, platform: e.target.value})
				break
			}
			case 'singlePlayer':{
				setFormInput({...formInput, singlePlayer: e.target.value})
				break
			}
			case 'multiplayer':{
				setFormInput({...formInput, multiplayer: e.target.value})
				break
			}
			default: {break}
		}
		console.log(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()
		if(formModalType === 'create'){
			if(game === ''){

			}
			console.log('running create data')
		}else if(formModalType === 'edit'){
			if(game !== ''){
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
					{formModalType} Games
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='p-5'>
				<Form onSubmit={handleSubmit} className="form-container">
					<Row>
						<Col md={3}>
							<label htmlFor="image-url">Link Cover Games</label>
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
							<label htmlFor="name">Nama Games</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.name}
								name="name"
								type="text"
								placeholder="Game Name"
								aria-label="GameName"
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
								aria-label="GameGenre"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="platform">Platform</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.platform}
								name="platform"
								type="text"
								placeholder="Platform"
								aria-label="GamePlatform"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="release">Tahun Rilis</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.release}
								name="release"
								type="number"
								placeholder="Release"
								aria-label="GameRelease"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="singlePlayer">Single Player</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.singlePlayer}
								name="singlePlayer"
								type="number"
								placeholder="singlePlayer"
								aria-label="GamesinglePlayer"
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<label htmlFor="multiplayer">Multi Player</label>
						</Col>
						<Col md={9}>
							<FormControl
								value={formInput.multiplayer}
								name="multiplayer"
								type="number"
								placeholder="Multiplayer"
								aria-label="Gamemultiplayer"
								onChange={handleChange}
							/>
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
