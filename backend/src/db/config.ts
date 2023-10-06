import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI ?? ''

await mongoose.connect(uri, {
  dbName: 'todo-app',
})
