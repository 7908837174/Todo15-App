import List from "./components/List.tsx";

const App = () => {
  return (
    <main id="todolist">
      <h1>
        Todo App
        {/* <span>Get things done, one item at a time.</span> */}
      </h1>

      <List />
    </main>
  );
};

export default App;
