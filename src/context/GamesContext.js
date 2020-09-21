import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
export const GamesContext = createContext()

const GamesProvider = (props) => {
	const [gamesData, setGamesData] = useState([])
	const [selectedGameId, setSelectedGameId] = useState([])
	const [selectedGame, setSelectedGame] = useState([])
	const [showDetailModal, setShowDetailModal] = useState(false)
	const [showFormModal, setShowFormModal] = useState(false)
	const [formModalType, setFormModalType] = useState('create')
	const [formInput, setFormInput] = useState({
		id: null,
		name: '',
		genre: '',
		singlePlayer: 0,
		multiplayer: 0,
		platform: '',
		release: '',
		image_url: ''
	})

	useEffect( () => {
		if(gamesData.length === 0){
			axios.get(`https://backendexample.sanbersy.com/api/data-game`, {
				headers: {
					mode: "no-cors"
				}
			})
			.then(res=>{
				setGamesData(res.data)
				console.log(res.data)
			})
		}
	})

	return(
		<GamesContext.Provider
			value={
				{
					games_data: [gamesData, setGamesData],
					selected_gameid: [selectedGameId, setSelectedGameId],
					selected_game: [selectedGame, setSelectedGame],
					show_detail_modal: [showDetailModal, setShowDetailModal],
					show_form_modal: [showFormModal, setShowFormModal],
					form_modal_type: [formModalType, setFormModalType],
					form_input: [formInput, setFormInput]
				}
			}>
			{props.children}
		</GamesContext.Provider>
	)
}

export default GamesProvider
