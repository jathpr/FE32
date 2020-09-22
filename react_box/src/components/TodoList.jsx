import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos }) => (
	<ul>{todos && todos.map(({ text, id, done }) => <TodoItem key={id} text={text} done={done} />)}</ul>
)
