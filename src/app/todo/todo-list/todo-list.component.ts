import { TodoItem } from './../../shared/models/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoList$ = this.todoService.getToDoList();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  public deleteItem(itemToRemove: TodoItem) {
    this.todoService.removeItem(itemToRemove);
  }
}
