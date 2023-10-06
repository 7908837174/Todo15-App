import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
})

export default TodoSchema
