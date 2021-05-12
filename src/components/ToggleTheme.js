import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ToggleTheme = () => {
	const { isLightTheme, toggleTheme } = useContext(ThemeContext)
	return (
		<button className="toggle-btn" onClick={toggleTheme}>
			<i className="fas fa-moon" style={{ opacity: isLightTheme ? 1 : 0 }}></i>
			<i className="fas fa-sun" style={{ opacity: isLightTheme ? 0 : 1 }}></i>
		</button>
	)
}

export default ToggleTheme
