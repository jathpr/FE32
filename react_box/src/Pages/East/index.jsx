import React from 'react'
import { useHistory, Link, Route } from 'react-router-dom'
import { Dog } from '../Dog'

export const East = ({ data }) => {
	const history = useHistory()

	const dogs = ['jena', 'mina']

	return (
		<div>
			East {data}
			{dogs.map((dog) => (
				<Link key={dog} to={`/east/${dog}`}>
					{dog}
				</Link>
			))}
			<Route path='/east/:name' component={Dog} />
			<button onClick={() => history.goBack()}>go Back</button>
		</div>
	)
}
