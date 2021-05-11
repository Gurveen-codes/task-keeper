import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const TaskItem = ({ task }) => {
	const { removeTask } = useContext(TaskContext)
	return (
		<li className="task-item" key={task.id} onClick={() => removeTask(task.id)}>
			{task.title}
		</li>
	)
}

export default TaskItem
