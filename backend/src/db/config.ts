import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI ?? ''

mongoose.connect(uri, {
  dbName: 'todo-app',
})
