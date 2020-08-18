import React, { useState, useEffect } from 'react'

export const App = (props) => {
	const value = props.value

	const [word, setWord] = useState('a')

	// useEffect(() => {
	// 	const getUsers = async () => {
	// 		const usersResp = await fetch('http://localhost:3004/users')
	// 		const users = await usersResp.json()
	// 		console.log('App -> users', users[0].name)
	// 	}
	// 	getUsers()
	// }, [])

	return (
		<>
			<div>App {value && `${value} ${word}`}</div>
			<button
				onClick={() => {
					setWord(word + 'a')
				}}>
				Add a
			</button>
		</>
	)
}
