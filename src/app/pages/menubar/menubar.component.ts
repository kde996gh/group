import { Component, OnChanges, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthenticationService, private router: Router) {

    this.authService.loggedInStatusChange.subscribe(val =>
      // (localStorage.getItem("user")!= null || val === true)? this.isLoggedIn = true : this.isLoggedIn = false)
    this.isLoggedIn = val)

    this.authService.isLoggedin().subscribe(val => (val!==null)?this.isLoggedIn = true : this.isLoggedIn = false)

  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  ngOnInit(): void {
    if(localStorage.getItem("user")!= null){
      this.isLoggedIn = true;
    }
  }

}
