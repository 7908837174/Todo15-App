import TodoModel from '../../../models/todo'
import TodoClass from '../classes'
import { type Todo as TodoType } from '../../../types/todo'

export default class TodoController {
  todoClass: TodoClass

  constructor() {
    this.todoClass = new TodoClass({
      todoModel: new TodoModel(),
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
