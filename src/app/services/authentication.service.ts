import { EventEmitter, Injectable, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // a menüben a login és az admin kijelentkezés megjelenik
  @Output() loggedInStatusChange: EventEmitter<any> = new EventEmitter();

 // isLoggedIn = false;

  constructor(private afAuth: AngularFireAuth, public router: Router) {
  //  this.afAuth.authState.subscribe((auth) => console.log(auth?.email));
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut().then((res) => {
   //   this.isLoggedIn = false;
      this.loggedInStatusChange.emit(false);
    });
  }

  async login(email: string, password: string) {
    await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
    //    this.isLoggedIn = true;
        this.loggedInStatusChange.emit(true);
       // localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  currentUserObservable(): any {
    return this.afAuth.authState;
  }
}
