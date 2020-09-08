import React, { useContext, useState } from 'react'
import { ThemeContext, themes } from '../Styles/Themes'
import { Home } from '../Pages'

export const App = () => {
	const [theme, setTheme] = useState(themes.dark)

	return (
		<ThemeContext.Provider value={theme}>
			<Home />
			<button onClick={() => setTheme(themes.dark)}>setDark</button>
			<button onClick={() => setTheme(themes.light)}>setLight</button>
		</ThemeContext.Provider>
	)
}
