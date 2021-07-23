import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskContextProvider from './contexts/TaskContext'
import { ThemeContext } from './contexts/ThemeContext'

const App = () => {
	const { isLightTheme } = useContext(ThemeContext)
	return (
		<div
			data-testid="app-component"
			className={isLightTheme ? 'App' : 'App dark'}
		>
			<TaskContextProvider>
				<NavBar></NavBar>
				<TaskList></TaskList>
				<TaskForm></TaskForm>
			</TaskContextProvider>
		</div>
	)
}

export default App
