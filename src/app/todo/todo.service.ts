import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from '../shared/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() {
    this.todoList$.subscribe(this._listChanged.bind(this));
  }



  private readonly LOCAL_STORAGE_KEY = 'todoList';
  private todoArr = this._getLocalStorageList();
  private todoList$ = new BehaviorSubject<TodoItem[]>(this.todoArr);
  private searchTerm$ = new BehaviorSubject<string>(null);
  public removeItem = this._removeItem;
  public checkItem = this._checkItem;
  public getToDoList = () => this.todoList$;
  public addItem = (newItem: TodoItem) => this.todoArr.unshift(newItem) && this.todoList$.next(this.todoArr);
  public getSearchTerm = () => this.searchTerm$;
   _listChanged(): void {
     if (this.todoArr.length) {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.todoArr));
     }
   }

   _getLocalStorageList(): TodoItem[] {
     let ret = [];
     const localStorageStr =  localStorage.getItem(this.LOCAL_STORAGE_KEY);
     if (localStorageStr) {
      ret = JSON.parse(localStorageStr);
      ret = ret.sort((a: TodoItem , b: TodoItem) => a.created > b.created ? -1 : 1 );
     }
     return ret;
   }

   _removeItem(itemToRemove: TodoItem) {
     const itemToRemoveIndex = this.todoArr.findIndex(item => item === itemToRemove);
     if (itemToRemoveIndex > -1) {
      this.todoArr.splice(itemToRemoveIndex, 1);
      this.todoList$.next(this.todoArr);
    }
   }

   _checkItem(itemToCheck: TodoItem) {

    itemToCheck.checked = !itemToCheck.checked;
    this.todoList$.next(this.todoArr);

  }
}
