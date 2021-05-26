import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';



@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  exports: [ManageComponent]
})
export class ManageModule { }
