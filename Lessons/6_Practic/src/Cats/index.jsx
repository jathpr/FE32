import React, { useEffect, useState } from 'react'

export const Cats = () => {
	const [cats, setCats] = useState([])
	console.log('Cats -> cats', cats)

	useEffect(() => {
		fetch('https://cat-fact.herokuapp.com/facts')
			.then((facts) => facts.json())
			.then((facts) => setCats(facts.all))
	}, [])

	// "_id": "5b1b40d4841d9700146158d8",
	// "text": "Koko the gorilla got a pet cat for her birthday in 1985 after she requested to have one as a birthday present.",
	// "type": "cat",
	// "user": {
	//     "_id": "5a9ac18c7478810ea6c06381",
	//     "name": {
	//         "first": "Alex",
	//         "last": "Wohlbruck"
	//     }
	// },
	// "upvotes": 13,
	// "userUpvoted": null

	return (
		<div>
			{cats.map((fact) => (
				<div key={fact._id}> {fact.text}</div>
			))}
		</div>
	)
}
