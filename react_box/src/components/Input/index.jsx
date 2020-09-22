import React, { useState } from 'react'

export const Input = ({ setData }) => {
	const [value, setValue] = useState('')

	const handleClick = (e) => {
		setData(value)
		setValue('')
	}

	return (
		<>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button onClick={handleClick}>Add user</button>
		</>
	)
}
