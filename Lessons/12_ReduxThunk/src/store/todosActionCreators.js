import * as types from './actionTypes'

export const addTodo = (todo) => ({ type: types.ADD_TODO, todo })

export const getTodos = () => async (dispatch) => {
	dispatch(getTodosStarted())

	const delay = new Promise((resolve, reject) =>
		setTimeout(() => {
			resolve()
		}, 1500),
	)
	await delay

	const todoUrl = new URL('http://localhost:3004/todos')
	const resp = await fetch(todoUrl)
	const data = await resp.json()
	dispatch(setTodos(data))
}

const setTodos = (todos) => ({ type: types.SET_TODOS, todos })
const getTodosStarted = () => ({ type: types.GET_TODOS })
