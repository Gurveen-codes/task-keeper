import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const NavBar = () => {
	const { tasks } = useContext(TaskContext)

	return (
		<div className="navbar">
			<h1 className="nav-title">My Tasks</h1>
			<p className="nav-desc">
				Remaining tasks: <span className="task-length">{tasks.length}</span>
			</p>
		</div>
	)
}

export default NavBar
