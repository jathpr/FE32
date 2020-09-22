import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {
	const [input, setInput] = useState('')

	const handleAdd = () => {
		addTodo({ text: input, done: false })
		setInput('')
	}

	return (
		<>
			<input value={input} onChange={(e) => setInput(e.target.value)} />
			<button onClick={handleAdd}>Add</button>
		</>
	)
}
