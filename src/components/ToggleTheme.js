import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ToggleTheme = () => {
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<button className="toggle-btn" onClick={toggleTheme}>
			Toggle
		</button>
	)
}

export default ToggleTheme
