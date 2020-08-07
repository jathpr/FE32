import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
