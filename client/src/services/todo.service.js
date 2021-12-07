class TodoService {
  constructor() {
    this.todos = [];
  }

  async getTodos() {
    return this.todos;
  }

  async addTodo(text) {
    const todo = { id: this.todos.length + 1, text, completed: false };
    this.todos = [todo, ...this.todos];
    return todo;
  }

  async deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  async updateTodo(todo) {
    this.todos = this.todos.map((t) => {
      if (t.id === todo.id) {
        return Object.assign({}, todo);
      }
      return t;
    });
  }
}
export default new TodoService();
