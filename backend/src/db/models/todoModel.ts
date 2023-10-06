import mongoose from 'mongoose'
import { TodoSchema } from '../schemas'

const TodoModel = mongoose.model('Todo', TodoSchema)

export default TodoModel
