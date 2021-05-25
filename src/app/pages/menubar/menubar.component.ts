import { Component, OnChanges, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit, OnChanges {

  isLoggedIn = true;

  constructor(private authService: AuthenticationService, private router: Router) {  
   }

  

  isAuthed(): boolean{
     return localStorage.getItem('user') !== null;

  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }

  ngOnInit(): void {
    this.isLoggedIn = this.isAuthed();
    console.log("Eza z:  " + this.isLoggedIn)
  }

  ngOnChanges(): void{
    this.isLoggedIn = this.isAuthed();
  }	



}
