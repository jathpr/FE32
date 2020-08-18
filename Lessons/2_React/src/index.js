import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

const name = 'hane'

const handleClick = () => {
	console.log('hello')
}

const strs = ['one', 'two']

ReactDOM.render(
	<React.StrictMode>
		{strs.map((str) => (
			<App key={str} value={str} />
		))}
	</React.StrictMode>,
	document.getElementById('root'),
)
