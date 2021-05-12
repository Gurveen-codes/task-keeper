import React, { useState, createContext } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {
	const tasksStored = localStorage.getItem('tasks')
	const initialTasks = tasksStored
		? JSON.parse(tasksStored)
		: [
				{ title: 'Learn JavaScript', id: uuid() },
				{ title: 'Make Projects', id: uuid() },
		  ]
	const [tasks, setTasks] = useState(initialTasks)

	//Add task
	const addTask = async (task) => {
		await setTasks([...tasks, { title: task, id: uuid() }])
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	//Remove task
	const removeTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	return (
		<TaskContext.Provider value={{ tasks, removeTask, addTask }}>
			{props.children}
		</TaskContext.Provider>
	)
}

export default TaskContextProvider
