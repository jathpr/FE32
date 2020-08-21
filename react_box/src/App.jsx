import React, { useState, useEffect } from 'react'
import { Input } from './Components/Input'

export const App = () => {
	const [users, setUsers] = useState([])

	const getUsers = async () => {
		const usersResp = await fetch('http://localhost:3004/users')
		const users = await usersResp.json()
		setUsers(users)
	}

	useEffect(() => {
		getUsers()
	}, [])

	const sendData = async (name) => {
		const url = 'http://localhost:3004/users'
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({ name }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const json = await response.json()
			setUsers([...users, json])
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	const updateData = async (name) => {
		const url = 'http://localhost:3004/users/1'
		try {
			const response = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify({ ...users[1], name }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const json = await response.json()
			setUsers([...users, json])
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	const deleteData = async (name) => {
		const url = 'http://localhost:3004/users/1'
		try {
			const response = await fetch(url, {
				method: 'DELETE',
			})
			const json = await response.json()
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
		<>
			{/* <Input setData={updateData} />
			<div key={users.name[0]}>{users.name[0]}</div>
			<div key={users.name[1]}>{users.name[1]}</div> */}
			{users.map(({ name }) => (
				<div key={name}>{name}</div>
			))}
			<button onClick={deleteData}>Delete 1</button>
		</>
	)
}
