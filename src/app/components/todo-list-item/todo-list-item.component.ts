import { Component, Input } from '@angular/core';
import { type Todo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
  @Input() todo?: Todo;
}
