import { type Todo as TodoType } from '../../../types/todo'
import type { TodoService } from '../../../db/services'

export default class TodoClass {
  todoService: TodoService

  constructor({ todoService }: { todoService: TodoService }) {
    this.todoService = todoService
  }

  async findAll(): Promise<TodoType[]> {
    return await this.todoService.findAll()
  }

  async create(body: TodoType): Promise<TodoType> {
    if (!body.description) {
      throw new Error('Description is required')
    }

    const dataToInsert = {
      // id: body.id || crypto.randomUUID(),
      description: body.description,
      completed: !!body.completed,
    }

    return await this.todoService.create(dataToInsert)
  }

  async delete(id: TodoType['id']): Promise<TodoType['id']> {
    const foundTodo = await this.todoService.findById(id)
    if (!foundTodo) throw new Error('Todo not found')

    return await this.todoService.delete(id)
  }
}
