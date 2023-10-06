import mongoose from 'mongoose'
import { type Todo as TodoType } from '../types/todo.ts'

const todoSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
})

const TodoModel = mongoose.model('Todo', todoSchema)

export default class Todo {
  async findAll(): Promise<TodoType[]> {
    const result: TodoType[] = await TodoModel.find()
    return result
  }

  async create(body: Partial<TodoType>): Promise<TodoType> {
    const result: any = await TodoModel.create(body)
    return result
  }

  async delete(id: TodoType['id']): Promise<TodoType['id']> {
    await TodoModel.deleteOne({ _id: id })
    return id
  }
}
