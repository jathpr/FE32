import React, { useState } from 'react'
import styles from './counter.module.css'

export const Counter = (props) => {
	const { initialValue = 0 } = props
	const [counter, setCounter] = useState(initialValue)

	return (
		<div className={styles.wraper}>
			{counter}
			<br />
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => setCounter(0)}>F5</button>
			<button onClick={() => setCounter(counter - 1)}>-</button>
		</div>
	)
}
