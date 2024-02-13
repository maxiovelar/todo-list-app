import { Component } from '@angular/core';
import { type Todo } from './interfaces/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Todo List';
  public todos: Todo[] = [
    {
      id: 1,
      description: 'Learn Angular',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 2,
      description: 'Learn TypeScript',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 3,
      description: 'Learn JavaScript',
      createdAt: new Date(),
      status: 'empty',
    },
  ];
}
