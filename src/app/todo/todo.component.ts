import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../shared/models/Todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  private searchTerm$ = this.todoService.getSearchTerm();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  searchChange(searchTerm: string): void {
    console.log(searchTerm);
    this.searchTerm$.next(searchTerm);

  }

}
