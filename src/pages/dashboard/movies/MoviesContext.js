import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
export const MoviesContext = createContext()

const MoviesProvider = (props) => {
	const [moviesData, setMoviesData] = useState([])
	const [selectedMovieId, setSelectedMovieId] = useState([])
	const [selectedMovie, setSelectedMovie] = useState([])
	const [showDetailModal, setShowDetailModal] = useState(false)
	const [showFormModal, setShowFormModal] = useState(false)
	const [formModalType, setFormModalType] = useState('create')
	const [formInput, setFormInput] = useState({
		id: null,
		image_url: '',
		title: '',
		duration: '',
		genre: '',
		year: '',
		description: '',
		rating: 0
	})

	useEffect( () => {
		if(moviesData.length === 0){
			axios.get(`https://backendexample.sanbersy.com/api/data-movie`, {
				headers: {
					mode: "no-cors"
				}
			})
			.then(res=>{
				setMoviesData(res.data)
				console.log(res.data)
			})
		}
	})

	return(
		<MoviesContext.Provider
			value={
				{
					movies_data: [moviesData, setMoviesData],
					selected_movieid: [selectedMovieId, setSelectedMovieId],
					selected_movie: [selectedMovie, setSelectedMovie],
					show_detail_modal: [showDetailModal, setShowDetailModal],
					show_form_modal: [showFormModal, setShowFormModal],
					form_modal_type: [formModalType, setFormModalType],
					form_input: [formInput, setFormInput]
				}
			}>
			{props.children}
		</MoviesContext.Provider>
	)
}

export default MoviesProvider
