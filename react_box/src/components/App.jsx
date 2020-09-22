import React from 'react'
import { Todo } from '../pages/Todo'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export const App = () => (
	<Provider store={store}>
		<Todo />
	</Provider>
)
