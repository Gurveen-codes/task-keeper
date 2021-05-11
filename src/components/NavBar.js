import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const NavBar = () => {
	const { tasks } = useContext(TaskContext)
	return (
		<div className="navbar">
			<h1 className="nav-title">My Tasks</h1>
			<p className="nav-desc">Remaining tasks: {tasks.length}</p>
		</div>
	)
}

export default NavBar
