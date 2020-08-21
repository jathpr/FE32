export const getUsers = async () => {
	const usersResp = await fetch('http://localhost:3004/users')
	const users = await usersResp.json()

	return users
}

export const sendData = async (name) => {
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

		return json
	} catch (error) {
		console.error('Ошибка:', error)
	}
}

export const updateData = async (id, name) => {
	const url = `http://localhost:3004/users/${id}`
	try {
		const response = await fetch(url, {
			method: 'PUT',
			body: JSON.stringify({ name }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const json = await response.json()

		return json
	} catch (error) {
		console.error('Ошибка:', error)
	}
}

export const deleteData = async (id) => {
	const url = `http://localhost:3004/users/${id}`
	try {
		const response = await fetch(url, {
			method: 'DELETE',
		})
		const json = await response.json()

		return json
	} catch (error) {
		console.error('Ошибка:', error)
	}
}
