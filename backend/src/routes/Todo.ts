import express from 'express'
import TodoController from '../modules/todo/controller'
import { type Todo as TodoType } from '../types/todo'

const router = express.Router()
const todoController = new TodoController()

// TODO: handle errors
router.get('/', async (req, res) => {
  try {
    const result = await todoController.findAll()
    res.json(result)
  } catch (err: any) {
    res.status(500).json({
      error: err.message,
    })
  }
})

router.post('/', async (req, res) => {
  const body: TodoType = req.body
  try {
    const result = await todoController.create(body)
    res.json(result)
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id as TodoType['id']

  try {
    const result = await todoController.delete(id)
    res.json(result)
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    })
  }
})

export default router
