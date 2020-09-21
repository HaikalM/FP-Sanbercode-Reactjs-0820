import React from 'react'
import {Button, Alert} from 'react-bootstrap'

const AlertBootstrap = props => {
	return(
		<Alert {...props}>
			<Alert.Heading>Halo, Selamat Datang</Alert.Heading>
			<p>
				Ini merupakan website uji coba yang akan digunakan untuk Tugas Akhir Bootcamp ReactJs Dasar
			</p>
			{/*
			<hr />
			<div className="d-flex justify-content-end">
				<Button variant='danger' onClick={props.onClose}>Tutup Alert</Button>
			</div>
					*/}
		</Alert>
	)
}

export default AlertBootstrap
