import React, {useState, useEffect, createContext} from 'react'
export const LoginContext = createContext()

const LoginProvider = (props) => {
	const currentUser = JSON.parse(localStorage.getItem('user'))
	const initUser = currentUser ? currentUser : null
	const [loginInput, setLoginInput] = useState({username: '', password: ''})
	const [userData, setUserData] = useState(initUser)

	//useEffect( () => {
		//if(userData.length === 0){
			//setUserData([
				//{
					//email: 'haikal1@gmail.com',
					//password: 'haikalsatu'
				//}, {
					//email: 'haikal2@gmail.com',
					//password: 'haikaldua'
				//}
			//])
		//}
	//})

	return(
		<LoginContext.Provider value={
			{
				user_data: [userData, setUserData],
				login_input: [loginInput, setLoginInput]
			}}>
			{props.children}
		</LoginContext.Provider>
	)
}

export default LoginProvider
