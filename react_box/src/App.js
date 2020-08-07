import React, { useState } from 'react'

export const App = (props) => {
	const value = props.value

	const [word, setWord] = useState('a')

	return (
		<>
			<div>App {value && `${value} ${word}`}</div>
			<button
				onClick={() => {
					setWord(word + 'a')
				}}>
				Add a
			</button>
		</>
	)
}
