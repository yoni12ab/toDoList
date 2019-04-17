import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TodoItem } from '../../shared/models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output()
  readonly addEvent = new EventEmitter<TodoItem>();
  public todoItem = new TodoItem('');

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  public submitMethod() {
    this.todoService.addItem(new TodoItem(this.todoItem.name));

    if (this.addEvent) {
      this.addEvent.emit(this.todoItem);
    }
    // console.log(this.todoItem);
    this.todoItem.name = undefined;
  }
}
