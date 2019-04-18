import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule, MatInputModule, MatFormFieldModule , MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search/search.pipe';
import { SearchComponent } from './search/search.component';
const importExport = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  BrowserAnimationsModule,
  ReactiveFormsModule ];

@NgModule({
  declarations: [SearchPipe, SearchComponent],
  imports: [
    CommonModule,
    ...importExport,
  ],
  exports: [
    ...importExport,
    SearchPipe, SearchComponent
  ]
})
export class SharedModule { }
