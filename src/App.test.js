import { screen, render, fireEvent } from '@testing-library/react'
import App from './App'
import ThemeContextProvider from './contexts/ThemeContext'

const MockApp = () => {
	return (
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	)
}

const addTasks = (tasks) => {
	const inputElement = screen.getByPlaceholderText(/New task/i)
	const buttonElement = screen.getByRole('button', { name: 'Add Task' })
	tasks.forEach((task) => {
		fireEvent.change(inputElement, { target: { value: task } })
		fireEvent.click(buttonElement)
	})
}

describe('App', () => {
	it('should render text in input field', async () => {
		render(<MockApp />)
		const inputElement = screen.getByPlaceholderText(/New task/i)
		fireEvent.change(inputElement, { target: { value: 'Go Shopping' } })
		expect(inputElement.value).toBe('Go Shopping')
	})

	it('should render "Add Task" button on screen', async () => {
		render(<MockApp />)
		const buttonElement = screen.getByRole('button', { name: 'Add Task' })
		expect(buttonElement).toBeInTheDocument()
	})

	it('should render 1 tasks on click', async () => {
		render(<MockApp />)
		addTasks(['Go Shopping', 'Eat Food'])
		let tasksDivElement = screen.getAllByTestId('task-item')
		fireEvent.click(tasksDivElement[0])
		tasksDivElement = screen.getAllByTestId('task-item')
		expect(tasksDivElement.length).toBe(1)
	})

	// it('should render 3 tasks', async () => {
	// 	render(<MockApp />)
	// 	addTasks(['Go Shopping', 'Pet Dog', 'Eat'])
	// 	const tasksDivElement = screen.getAllByTestId('task-item')
	// 	expect(tasksDivElement.length).toBe(3)
	// })

	it('should not have class "dark" by default', async () => {
		render(<MockApp />)
		const divElement = screen.getByTestId('app-component')
		expect(divElement).not.toHaveClass('dark')
	})
})
