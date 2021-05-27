import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from '../menubar/menubar.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { GroupaddComponent } from '../groupadd/groupadd.component';
import { GroupaddModule } from '../groupadd/groupadd.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
