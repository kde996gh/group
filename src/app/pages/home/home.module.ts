import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from '../menubar/menubar.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, FormsModule,
    MenubarModule,HomeRoutingModule,

  ],
  exports:[HomeComponent],
})
export class HomeModule { }
