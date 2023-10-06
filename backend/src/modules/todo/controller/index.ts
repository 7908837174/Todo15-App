import TodoClass from '../classes'
import { type Todo as TodoType } from '../../../types/todo'
import { TodoService } from '../../../db/services'

export default class TodoController {
  todoClass: TodoClass

  constructor() {
    this.todoClass = new TodoClass({
      todoService: new TodoService(),
    })
  }

  async findAll(): Promise<TodoType[]> {
    return await this.todoClass.findAll()
  }

  async create(body: TodoType): Promise<TodoType> {
    return await this.todoClass.create(body)
  }

  async delete(id: TodoType['id']): Promise<TodoType['id']> {
    return await this.todoClass.delete(id)
  }
}
