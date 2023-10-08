import type { TodoType } from '../types.d'

export const getTodoList = async (): Promise<TodoType[]> => {
  const response = await fetch('http://localhost:3000/todo')
  const result = await response.json()
  return result
}

export const createTodo = async (
  todo: Partial<TodoType>
): Promise<TodoType> => {
  const response = await fetch('http://localhost:3000/todo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  })
  const result = await response.json()
  if (response.status !== 200) {
    throw new Error('Error')
  }
  return result
}

export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`http://localhost:3000/todo/${id}`, {
    method: 'DELETE',
  })
  if (response.status !== 200) {
    throw new Error('Error')
  }
}
