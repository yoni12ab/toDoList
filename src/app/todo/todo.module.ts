import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [TodoComponent, TodoFormComponent, TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class TodoModule { }
