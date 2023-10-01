import db from '../services/db/sqlite'
import { type Todo as TodoType, type SqliteError } from '../types/todo.ts'

export default class Todo {
  async findAll(): Promise<TodoType[]> {
    return await new Promise((resolve, reject) => {
      db.all('SELECT * FROM todo', (err: SqliteError, rows: TodoType[]) => {
        if (err !== null) {
          reject(err)
          return
        }
        resolve(rows)
      })
    })
  }

  async create(body: TodoType): Promise<TodoType> {
    return await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO todo (id, description, completed) VALUES (?, ?, ?)',
        [body.id, body.description, body.completed],
        (err: SqliteError) => {
          if (err !== null) {
            reject(err)
            return
          }
          resolve(body)
        }
      )
    })
  }

  async delete(id: TodoType['id']): Promise<TodoType['id']> {
    return await new Promise((resolve, reject) => {
      db.run('DELETE FROM todo WHERE id = ?', [id], (err: SqliteError) => {
        if (err !== null) {
          reject(err)
          return
        }
        resolve(id)
      })
    })
  }
}
