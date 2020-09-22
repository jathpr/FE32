import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todos } from './todosReducer'

export const store = createStore(todos, composeWithDevTools(applyMiddleware(thunk)))
