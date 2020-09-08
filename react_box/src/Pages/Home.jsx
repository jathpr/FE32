import React, { useContext } from 'react'
import { ThemeContext } from '../Styles/Themes'

export const Home = () => {
	const theme = useContext(ThemeContext)

	return (
		<div>
			<button style={{ background: theme.background, color: theme.foreground }}>
				Я стилизован темой из контекста!
			</button>
		</div>
	)
}
