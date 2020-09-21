import React, {useState, useContext, useEffect} from 'react'
import {Modal, Button, Row, Col} from 'react-bootstrap'
import {GamesContext} from '../../../context/GamesContext'
import axios from 'axios'
import * as FiIcons from 'react-icons/fi'
import * as GiIcons from 'react-icons/gi'
import * as FaIcons from 'react-icons/fa'

const DetailModal = (props) => {
	const {games_data, selected_gameid, selected_game, show_detail_modal} = useContext(GamesContext)
	const [selectedGameId, setSelectedGameId] = selected_gameid
	const [selectedGame, setSelectedGame] = selected_game
	const [showDetailModal, setShowDetailModal] = show_detail_modal
	const game = selectedGame

	useEffect(() => {
		if(game === ''){
			axios.get(`https://backendexample.sanbersy.com/api/data-game/${selectedGameId}`, {
				headers: {
					mode: "no-cors"
				}
			})
			.then(res=>{
				setSelectedGame(res.data)
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
					{game.name} ({game.release})
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col>
						<p className="text-muted"><b>Genre</b> : {game.genre}</p>
						<p className="text-muted"><b>Platform</b> : {game.platform}</p>
					</Col>
					<Col className='row justify-content-end pr-4'>
						<h3 className="mr-2">
							{game.singlePlayer === 1 &&
								<GiIcons.GiGamepad style={{color: 'gray'}}/>
							}
							{game.multiplayer === 1 &&
								<>
									<GiIcons.GiGamepad style={{color: 'gray'}}/>
									<GiIcons.GiGamepad style={{color: 'gray'}}/>
								</>
							}
						</h3>
					</Col>
				</Row>
				<img
					src={game.image_url}
					alt={game.name}
					width="100%" height="400px"
					style={{ objectFit: 'cover' }}
					className='rounded'
				/>
				<p className='mt-2'>
					{game.description}
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default DetailModal

