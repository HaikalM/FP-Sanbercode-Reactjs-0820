import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const VerticallyCenteredModal = props => {
	return(
		<>
			<Modal
				{...props}
				size="lg"
				backdrop='static'
				aria-labelledby="contained-modal-title-vcenter"
				centered
				scrollable
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Tambah Data
					</Modal.Title>
				</Modal.Header>
				<Modal.Body classNam='show-grid'>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
						consectetur ac, vestibulum at eros.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='light' onClick={props.onHide}>Tutup</Button>
					<Button variant='success' onClick={props.onHide}>Simpan</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default VerticallyCenteredModal
