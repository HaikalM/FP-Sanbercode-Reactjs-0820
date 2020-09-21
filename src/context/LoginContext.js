import React, {createContext} from 'react'
const LoginContext = createContext()

export const LoginProvider = (props) => {
	const [user, setUser] = useState([
		{
			username: 'haikal1@gmail.com',
			password: 'haikalsatu'
		}, {
			email: 'haikal2@gmail.com',
			password: 'haikaldua'
		}
	])

	const [loginInput, setLoginInput] = useState({username: '', password: ''})
	return(
		<LoginContext.Provider value={
			{
				user: [user, setUser],
				login_input: [loginInput, setLoginInput]
			}}>
			{props.children}
		</LoginContext.Provider>
	)
}
