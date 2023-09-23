import localStorageService from "./localStorage.service";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

class TodoService {
  todoLabel: string;
  constructor() {
    this.todoLabel = "todos";
  }

  async getTodos(): Promise<Todo[]> {
    const foundData = localStorageService.get(this.todoLabel);
    if (!foundData || !foundData.length) {
      localStorageService.set(this.todoLabel, []);
      return [];
    }
    return foundData;
  }

  async addTodo(text: string) {
    const todos = await this.getTodos();
    const todo = { id: new Date().getTime(), text, completed: false };
    localStorageService.set(this.todoLabel, [todo, ...todos]);
    return todo;
  }

  async deleteTodo(id: number) {
    const todos = await this.getTodos();
    const newTodos = todos.filter((t) => t.id !== id);
    localStorageService.set(this.todoLabel, newTodos);
    return id;
  }

  async updateTodo(todo: Todo) {
    const todos = await this.getTodos();
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return Object.assign({}, todo);
      }
      return t;
    });
    localStorageService.set(this.todoLabel, newTodos);
    return todo;
  }
}
export default new TodoService();
