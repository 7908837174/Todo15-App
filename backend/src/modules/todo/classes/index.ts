import type TodoModel from '../../../models/todo'
import { type Todo as TodoType } from '../../../types/todo'

export default class TodoClass {
  todo: TodoModel

  constructor({ todoModel }: { todoModel: TodoModel }) {
    this.todo = todoModel
  }

  async findAll(): Promise<TodoType[]> {
    return await this.todo.findAll()
  }

  async create(body: TodoType): Promise<TodoType> {
    if (!body.description) {
      throw new Error('Description is required')
    }

    const dataToInsert = {
      id: body.id || crypto.randomUUID(),
      description: body.description,
      completed: !!body.completed,
    }

    return await this.todo.create(dataToInsert)
  }

  async delete(id: TodoType['id']): Promise<TodoType['id']> {
    return await this.todo.delete(id)
  }
}
