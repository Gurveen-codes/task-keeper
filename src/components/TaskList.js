import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import TaskItem from './TaskItem'

const TaskList = () => {
	const { tasks } = useContext(TaskContext)

	return (
		<div className="task-list">
			<ul>
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task}></TaskItem>
				))}
			</ul>
		</div>
	)
}

export default TaskList
