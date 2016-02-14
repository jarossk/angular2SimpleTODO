import {Component, bootstrap} from 'angular2/angular2';
import {TodoListComponent} from './todoList.ts';
import {TodoService} from './todoService.ts';

@Component({
  selector: 'app',
//  directives: [TodoList],
  template: `
    <h1>Todo App</h1>
    <todo-list></todo-list>
    `,
    directives: [TodoListComponent]
})
class AppComponent { }

bootstrap(AppComponent, [TodoService]);

