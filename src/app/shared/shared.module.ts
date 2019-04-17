import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule, MatInputModule, MatFormFieldModule , MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
const importExport = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  BrowserAnimationsModule,
  ReactiveFormsModule ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...importExport
  ],
  exports: [
    ...importExport
  ]
})
export class SharedModule { }
