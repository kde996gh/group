import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupaddComponent } from './groupadd.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [GroupaddComponent],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserModule
  ],
  entryComponents: [GroupaddComponent],
  exports: [GroupaddComponent],
})
export class GroupaddModule {}
