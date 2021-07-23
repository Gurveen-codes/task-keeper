import { screen, render, fireEvent } from '@testing-library/react'
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvider from './contexts/ThemeContext'

const MockToggleTheme = () => {
	return (
		<ThemeContextProvider>
			<ToggleTheme />
		</ThemeContextProvider>
	)
}

describe('Toggle Theme', () => {
	it('should render toggle theme button', async () => {
		render(<MockToggleTheme />)
		const buttonElement = screen.getByRole('button')
		expect(buttonElement).toBeInTheDocument()
	})

	it('should render moon icon by default', async () => {
		render(<MockToggleTheme />)
		const iconElement = screen.getByTestId('moon-icon')
		expect(iconElement.style.opacity).toBe('1')
	})

	it('should hide moon icon on click', async () => {
		render(<MockToggleTheme />)
		const buttonElement = screen.getByRole('button')
		const iconElement = screen.getByTestId('moon-icon')
		fireEvent.click(buttonElement)
		expect(iconElement.style.opacity).toBe('0')
	})
})
