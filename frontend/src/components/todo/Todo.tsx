import { useState } from 'react'
import TodoItem from './TodoItem'

const funnyTodoPlaceholders = [
  'Remember to conquer the world... one task at a time!',
  "Don't forget to walk the invisible pet unicorn.",
  "World domination (just kidding, it's groceries).",
  'Find the meaning of life (after laundry).',
  'Train the office plant to do tricks.',
  'Take over the world (or just pick up dry cleaning).',
  'Develop a superpower (or pay bills).',
  'Solve world hunger (starting with ordering pizza).',
  "Reorganize sock drawer (it's an emergency).",
  'Become a ninja (or make a dentist appointment).',
  'Save the galaxy (but first, take out the trash).',
]

interface Props {
  todoList: any[]
  createTodoHandler: (description: string) => Promise<void>
}

const Todo: React.FC<Props> = ({ todoList, createTodoHandler }: Props) => {
  const [input, setInput] = useState('')

  return (
    <section>
      <div className="relative my-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 20l7 -7"></path>
            <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"></path>
          </svg>
        </div>
        <input
          type="text"
          className="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg"
          placeholder={
            funnyTodoPlaceholders[
              Math.floor(Math.random() * funnyTodoPlaceholders.length)
            ]
          }
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          required
        />
        <button
          type="submit"
          onClick={() => {
            createTodoHandler(input)
              .then(() => {
                setInput('')
              })
              .catch(() => {})
          }}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Add
        </button>
      </div>

      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo._id}
            description={todo.description}
            completed={todo.completed}
          />
        ))}
      </ul>
    </section>
  )
}

export default Todo
