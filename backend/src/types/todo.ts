export interface Todo {
  id: `${string}-${string}-${string}-${string}-${string}`
  description: string
  completed: boolean
}

export type SqliteError = Error | null
