import type { TodoType } from '../types.d'

// TODO: pending to move this to .env
const API_URL = 'https://lismore-bilby-khdq.1.us-1.fl0.io'

export const getTodoList = async (): Promise<TodoType[]> => {
  const response = await fetch(`${API_URL}/todo`)
  const result = await response.json()
  return result
}

export const createTodo = async (
  todo: Partial<TodoType>
): Promise<TodoType> => {
  const response = await fetch(`${API_URL}/todo`, {
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
  const response = await fetch(`${API_URL}/todo/${id}`, {
    method: 'DELETE',
  })
  if (response.status !== 200) {
    throw new Error('Error')
  }
}
