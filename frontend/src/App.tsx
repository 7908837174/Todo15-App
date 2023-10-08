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

const App: React.FC = () => {
  return (
    <main className="flex items-center min-h-screen bg-gray-50">
      <section className="w-full max-w-3xl px-4 py-6 mx-auto">
        <header>
          <h1 className="py-3 text-4xl font-bold text-center">Todo list:</h1>
        </header>
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
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg"
              placeholder={
                funnyTodoPlaceholders[
                  Math.floor(Math.random() * funnyTodoPlaceholders.length)
                ]
              }
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Add
            </button>
          </div>

          <ul>
            <li className="flex items-center justify-start px-4 py-6 mb-3 bg-white rounded-lg shadow">
              <div className="flex items-center w-full">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="mx-4 line-clamp-none lg:line-clamp-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, earum inventore. Minus sint sed illo itaque pariatur,
                  facilis magni dolores maiores possimus molestiae nobis
                  aspernatur aperiam officiis ea! Asperiores, amet!
                </span>
              </div>
              <div className="flex items-center ">
                <button className="p-2 bg-red-500 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
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
                    <path
                      d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                      strokeWidth="0"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                      strokeWidth="0"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

export default App
