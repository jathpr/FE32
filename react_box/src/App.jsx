import React, { useState, useEffect } from 'react'
import { Input } from './Components/Input'
import { getUsers, updateData, deleteData, sendData } from './server/requests'
import { User } from './Components/User'

export const App = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		getUsers().then((users) => setUsers(users))
	}, [])

	const handleAdd = async (text) => {
		const newUser = await sendData(text)
		setUsers([...users, newUser])
	}

	const handleUpdate = async (id, text) => {
		await updateData(id, text)
		getUsers().then((users) => setUsers(users))
	}

	const handleDelete = async (id) => {
		await deleteData(id)
		getUsers().then((users) => setUsers(users))
	}

	return (
		<>
			<Input setData={handleAdd} />
			{users.map((user) => (
				<User
					key={user.id}
					name={user.name}
					updateUser={(name) => handleUpdate(user.id, name)}
					deleteUser={() => handleDelete(user.id)}
				/>
			))}
		</>
	)
}
