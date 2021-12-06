import React from "react";

import List from "../components/todoList/List";

const Home = () => {
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

export default Home;
