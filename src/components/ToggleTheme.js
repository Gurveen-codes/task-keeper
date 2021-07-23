import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ToggleTheme = () => {
	const { isLightTheme, toggleTheme } = useContext(ThemeContext)
	return (
		<button
			data-testid="toggle-theme-btn"
			className="toggle-btn"
			onClick={toggleTheme}
		>
			<i
				data-testid="moon-icon"
				className="fas fa-moon"
				style={{ opacity: isLightTheme ? 1 : 0 }}
			></i>
			<i className="fas fa-sun" style={{ opacity: isLightTheme ? 0 : 1 }}></i>
		</button>
	)
}

export default ToggleTheme
