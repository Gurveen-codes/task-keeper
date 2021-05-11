import React, { useState, createContext } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {
	const [tasks, setTasks] = useState([
		{ title: 'Do Something', id: uuid() },
		{ title: 'Work out', id: uuid() },
	])
	const removeTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	return (
		<TaskContext.Provider value={{ tasks, removeTask }}>
			{props.children}
		</TaskContext.Provider>
	)
}

export default TaskContextProvider
