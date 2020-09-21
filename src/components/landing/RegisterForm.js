import React, {useState, useContext} from 'react'
import {Form, Button} from 'react-bootstrap'
import {LoginContext} from '../../context/LoginContext'
import axios from 'axios'

const RegisterForm = () => {
	const {user_data, input_login} = useContext(LoginContext)
	const [userData, setUserData] = user_data
	const [registerInput, setRegisterInput] = useState({name: '', email: '', password: ''})

	function handleInput(e){
		let inputName = e.target.name
		switch(inputName){
			case 'name':{
				setRegisterInput({...registerInput, name: e.target.value})
				break
			}
			case 'email':{
				setRegisterInput({...registerInput, email: e.target.value})
				break
			}
			case 'password':{
				setRegisterInput({...registerInput, password: e.target.value})
				break
			}
			default: {break}
		}
		console.log(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()
		axios.post(`https://backendexample.sanbersy.com/api/register`,{
			name: registerInput.name,
			email: registerInput.email,
			password: registerInput.password,
		}).then(
			(res) => {
				console.log(res.data)
				var user = res.data.user
				var token = res.data.token
				var currentUser = {name: user.name, email: user.email, token}
				setUserData(currentUser)
				localStorage.setItem('user', JSON.stringify(currentUser))
			}
		).catch((err)=>{
			alert(err)
		})
		setRegisterInput({
			name: '',
			email: '',
			password: ''
		})
		console.log(userData)
	}
	return(
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-0'>
				<Form.Label className='mb-0'>Name</Form.Label>
				<Form.Control
					name='name'
					onChange={handleInput}
					value={registerInput.name}
					type="text" placeholder="Maulana Haikal" />
			</Form.Group>
			<Form.Group className='mb-0'>
				<Form.Label className='mb-0'>Email address</Form.Label>
				<Form.Control
					name='email'
					onChange={handleInput}
					value={registerInput.email}
					type="email" placeholder="name@example.com" />
			</Form.Group>
			<Form.Group>
				<Form.Label className='mb-0'>Password</Form.Label>
				<Form.Control
					name='password'
					onChange={handleInput}
					value={registerInput.password}
					type="password"/>
			</Form.Group>
			<Form.Group>
				<Button type='submit' variant='primary' size='md' className='btn-block'>Register</Button>
			</Form.Group>
		</Form>
	)
}

export default RegisterForm
