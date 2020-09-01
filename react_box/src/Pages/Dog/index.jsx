import React from 'react'
import { useParams } from 'react-router-dom'

export const Dog = () => {
	const { name } = useParams()

	return <div>Dog {name}</div>
}
