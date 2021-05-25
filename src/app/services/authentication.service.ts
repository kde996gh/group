import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {


  constructor(private afAuth: AngularFireAuth, public router: Router) {}

  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  async login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

   authenticated(): boolean {
    return localStorage.getItem('user') !== null;

    //return this.afAuth.authState !== null;
  }

  currentUserObservable(): any {
    return this.afAuth.authState;
  }
}
