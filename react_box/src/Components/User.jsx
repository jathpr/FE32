import React from 'react'

export const User = ({ name, updateUser, deleteUser }) => (
	<li>
		<input value={name} onChange={(e) => updateUser(e.target.value)} />
		<button onClick={deleteUser}>X</button>
	</li>
)
