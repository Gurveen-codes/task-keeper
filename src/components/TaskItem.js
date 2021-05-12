import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const TaskItem = ({ task }) => {
	const { removeTask } = useContext(TaskContext)

	return (
		<li className="task-item" onClick={() => removeTask(task.id)}>
			{task.title}
		</li>
	)
}

export default TaskItem
