import React, { useState, useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const TaskForm = () => {
	const [task, setTask] = useState('')
	const { addTask } = useContext(TaskContext)
	const submitHandler = (e) => {
		e.preventDefault()
		addTask(task)
		setTask('')
	}
	return (
		<div className="task-form">
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={task}
					required
					placeholder="New task .."
					onChange={(e) => setTask(e.target.value)}
				/>
				<input type="submit" value="Add Task" />
			</form>
		</div>
	)
}

export default TaskForm
