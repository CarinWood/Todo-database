import Todo from '../Todo.jsx'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'


test('Todo headline renders with correct className', () => {
    const component = render(<Todo/>)
    const headline = component.getByTestId('headline')

    expect(headline.className).toBe("todo-headline")
})