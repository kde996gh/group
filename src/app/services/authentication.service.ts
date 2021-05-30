import { EventEmitter, Injectable, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // a menüben a login és az admin kijelentkezés megjelenik
  @Output() loggedInStatusChange: EventEmitter<any> = new EventEmitter();

  constructor(private afAuth: AngularFireAuth, public router: Router) {
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut().then((res) => {
      this.loggedInStatusChange.emit(false);

    });
  }

  async login(email: string, password: string) {
    await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.loggedInStatusChange.emit(true);

      });
  }

  currentUserObservable(): any {
    return this.afAuth.authState;
  }

  isLoggedin() {
    return this.afAuth.authState.pipe(first())
  }

}
