import express from 'express'
import TodoController from '../modules/todo/controller'
import { type Todo as TodoType } from '../types/todo'

const router = express.Router()
const todoController = new TodoController()

// TODO: handle errors
router.get('/', (req, res) => {
  todoController
    .findAll()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      })
    })
})

router.post('/', (req, res) => {
  const body: TodoType = req.body

  todoController
    .create(body)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id as TodoType['id']

  todoController
    .delete(id)
    .then((result) => {
      console.log(result)

      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      })
    })
})

export default router
