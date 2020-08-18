import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Counter } from './Counter'

ReactDOM.render(
	<React.StrictMode>
		<Counter initialValue={9} />
		<Counter />
		<Counter />
	</React.StrictMode>,
	document.getElementById('root'),
)
