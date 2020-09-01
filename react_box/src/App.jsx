import React from 'react'
import { NavLink, Switch, Route, useHistory } from 'react-router-dom'
import { About, East, Home } from './Pages'

const text = 'hello'

export const App = (props) => {
	const histoty = useHistory()

	return (
		<>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/about'>About</NavLink>
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/east' render={() => <East data={text} />} />
				<Route path='/' component={Home} />
			</Switch>
			<button
				onClick={() => {
					histoty.push('/east')
				}}>
				East
			</button>
		</>
	)
}
