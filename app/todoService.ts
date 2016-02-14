export class TodoService {
  
  private _todos;
  constructor() {
    this._todos = todos;
  }
  getTodos() {
    return this._todos;
  }
  completed(todo) {
    todo._isCompleted = todo.isCompleted ? false : true;
  }
  delete(todo) {
    var index = this._todos.indexOf(todo);
    this._todos.splice(index, 1);
  }
  add(content: string) {
    var todo = {
      content: content,
      createdAt: new Date(),
      isCompleted: false
    }
    this._todos.push(todo);
  }
}

var todos = [
  {
    content: 'Learn Angular 2',
    createdAt: new Date(),
    isCompleted: false
  },
  {
    content: 'Learn TypeScript',
    createdAt: new Date(),
    isCompleted: true
  },
  {
    content: 'Learn Node.js',
    createdAt: new Date(),
    isCompleted: false
  }
]