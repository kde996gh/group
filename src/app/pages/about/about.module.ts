import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule, AboutRoutingModule, FormsModule, ReactiveFormsModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
