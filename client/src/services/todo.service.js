import localStorageService from "./localStorage.service";

class TodoService {
  constructor() {
    this.todoLabel = "todos";
  }

  async getTodos() {
    const foundData = localStorageService.get(this.todoLabel, { parsed: true });
    if (!foundData || !foundData.length) {
      localStorageService.set(this.todoLabel, [], { parsed: true });
      return [];
    }
    return foundData;
  }

  async addTodo(text) {
    const todos = await this.getTodos();
    const todo = { id: new Date().getTime(), text, completed: false };
    localStorageService.set(this.todoLabel, [todo, ...todos], { parsed: true });
    return todo;
  }

  async deleteTodo(id) {
    const todos = await this.getTodos();
    const newTodos = todos.filter((t) => t.id !== id);
    localStorageService.set(this.todoLabel, newTodos, { parsed: true });
    return id;
  }

  async updateTodo(todo) {
    const todos = await this.getTodos();
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return Object.assign({}, todo);
      }
      return t;
    });
    localStorageService.set(this.todoLabel, newTodos, { parsed: true });
    return todo;
  }
}
export default new TodoService();
