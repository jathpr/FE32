const SERVER = 'http://localhost:3004/users'

export const getUsers = async () => {
	const usersResp = await fetch(SERVER)
	const users = await usersResp.json()

	return users
}

export const sendData = async (name) => {
	try {
		const response = await fetch(SERVER, {
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
	const url = `${SERVER}/${id}`
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
	const url = `${SERVER}/${id}`
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
