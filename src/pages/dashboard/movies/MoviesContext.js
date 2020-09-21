import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
export const MoviesContext = createContext()

const MoviesProvider = (props) => {
	const [moviesData, setMoviesData] = useState([])
	const [selectedMovieId, setSelectedMovieId] = useState([])
	const [showDetailModal, setShowDetailModal] = useState(false)

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
					show_detail_modal: [showDetailModal, setShowDetailModal]
				}
			}>
			{props.children}
		</MoviesContext.Provider>
	)
}

export default MoviesProvider
