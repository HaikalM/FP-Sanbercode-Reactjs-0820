import React, {useState, useContext} from 'react'
import {Form, Button} from 'react-bootstrap'
import {LoginContext} from '../../context/LoginContext'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {
	const {user_data, input_login} = useContext(LoginContext)
	const [userData, setUserData] = user_data
	const [loginInput, setLoginInput] = useState({email: '', password: ''})
	let history = useHistory()

	function handleInput(e){
		let inputName = e.target.name
		switch(inputName){
			case 'email':{
				setLoginInput({...loginInput, email: e.target.value})
				break
			}
			case 'password':{
				setLoginInput({...loginInput, password: e.target.value})
				break
			}
			default: {break}
		}
		console.log(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()
		if(loginInput.email !== '' && loginInput.password !== ''){
			const searchUser = userData.filter(user => user.email === loginInput.email && user.password === loginInput.password)
			if(searchUser.length > 0){
				history.push('/movies')
			}
		}
		//setLoginInput({
			//email: '',
			//password: ''
		//})
		//console.log(userData)
	}

	return(
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-0'>
				<Form.Label className='mb-0'>Email address</Form.Label>
				<Form.Control
					name='email'
					onChange={handleInput}
					value={loginInput.email}
					type="email" placeholder="name@example.com" />
			</Form.Group>
			<Form.Group>
				<Form.Label className='mb-0'>Password</Form.Label>
				<Form.Control
					name='password'
					onChange={handleInput}
					value={loginInput.password}
					type="password"/>
			</Form.Group>
			<Form.Group>
				<Button type='submit' variant='primary' size='md' className='btn-block'>Login</Button>
			</Form.Group>
		</Form>
	)
}

export default LoginForm
