import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ThemeContextProvider from './contexts/ThemeContext'
import ToggleTheme from './components/ToggleTheme'

ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<App />
			<ToggleTheme />
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
