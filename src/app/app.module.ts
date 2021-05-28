import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {GroupcardModule } from './pages/groupcard/groupcard/groupcard.module';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { MenubarModule } from './pages/menubar/menubar.module';
import { ManageComponent } from './pages/manage/manage.component';
import { GroupaddComponent } from './pages/groupadd/groupadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupaddModule } from './pages/groupadd/groupadd.module';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    GroupcardModule,
    HomeModule,
    AppRoutingModule,
    MenubarModule,FormsModule, ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
