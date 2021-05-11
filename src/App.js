import React from 'react'
import NavBar from './components/NavBar'
import TaskList from './components/TaskList'
import TaskContextProvider from './contexts/TaskContext'

const App = () => {
	return (
		<div className="App">
			<TaskContextProvider>
				<NavBar></NavBar>
				<TaskList></TaskList>
			</TaskContextProvider>
		</div>
	)
}

export default App
