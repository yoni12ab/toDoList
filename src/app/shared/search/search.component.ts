import { Component, OnInit, ViewChild, ElementRef, Pipe, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import {debounceTime, distinct} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() readonly searchChange = new EventEmitter<string>();
  @ViewChild('searchTerm') readonly searchTermDom: ElementRef;
  constructor() { }

  ngOnInit() {
    fromEvent(this.searchTermDom.nativeElement, 'keyup')
    .pipe(
      debounceTime(300),
      distinct()
    )
    .subscribe(this._searchChange.bind(this));
  }

  _searchChange(newTerm: string): void {
      this.searchChange.emit(this.searchTermDom.nativeElement.value);
  }
}
