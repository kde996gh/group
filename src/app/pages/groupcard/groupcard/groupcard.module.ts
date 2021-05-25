import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupcardComponent } from './groupcard.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GroupcardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [GroupcardComponent],
})
export class GroupcardModule {}
