import { useEffect, useState } from 'react'
import Todo from './components/todo/Todo'
import { getTodoList, createTodo, deleteTodo } from './service/todo'
import type { TodoType } from './types.d'

const App: React.FC = () => {
  const [todoList, setTodoList] = useState([] as TodoType[])

  useEffect(() => {
    alert(
      'Currently working on deploy the backend. so the frontend is not working yet. :c'
    )
    getTodoList()
      .then((res) => {
        setTodoList(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const createTodoHandler = async (description: string): Promise<void> => {
    const result = await createTodo({
      description,
      completed: false,
    })
    setTodoList([...todoList, result])
  }

  const deleteTodoHandler = async (id: string): Promise<void> => {
    await deleteTodo(id)

    const newTodoList = todoList.filter((todo) => todo._id !== id)
    setTodoList(newTodoList)
  }

  return (
    <main className="flex items-center min-h-screen bg-gray-50">
      <section className="w-full max-w-3xl px-4 py-6 mx-auto">
        <header>
          <h1 className="py-3 text-4xl font-bold text-center">Todo list:</h1>
        </header>
        <Todo
          todoList={todoList}
          createTodoHandler={createTodoHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </section>
    </main>
  )
}

export default App
