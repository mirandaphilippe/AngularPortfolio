import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Router } from '@angular/router';
import { FirebaseAuth } from 'angularfire2';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import { UserAuth } from '../interfaces/userAuth.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: FirebaseAuth = null;
  userStorage = localStorage.getItem('fhUser');
  fbAuth = this._afAuth.auth;
  public user: Observable<UserAuth | null>;

  constructor(
    private _afAuth: AngularFireAuth,
    private _fireStore: AngularFirestore,
    private _router: Router
  ) {

    this.getCurrentUser();
   }

  emailLogin(user) {
    return this._afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then( data => {
        localStorage.setItem('fhUser', JSON.stringify(data.user));
        this._router.navigate(['user', 'profile']);
        return this.updateUserData(data.user);
      }

      );
  }
  emailRegisterUser(user) {
      return this._afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).
      then(
        (data) => {
          this._afAuth.auth.currentUser.updateProfile(
            {
              displayName: user.username,
              photoURL: null
            }
          );
          localStorage.setItem('fhUser', JSON.stringify(data.user));

          this._router.navigate(['user', 'profile']);
          return this.updateUserData(data.user);
        }
      );
  }
  signOut() {
    this._router.navigate(['auth', 'login']);
    return this._afAuth.auth.signOut();
  }
  updateProfile(user) {
    return this._afAuth.auth.currentUser.updateProfile({
      displayName: user.username,
      photoURL: null
    });
  }
  getCurrentUser() {
    const currentUser = this._afAuth.authState.pipe(
      switchMap(
        (user) => {
          if (user) {
            return this._fireStore.doc<UserAuth>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        }
      )
    );
    this.user = currentUser;
    return currentUser;
  }

  private updateUserData(user: UserAuth) {
    const userRef: AngularFirestoreDocument = this._fireStore.doc(
      `users/${user.uid}`
    );

    const data: UserAuth = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return userRef.set(data);
  }
}


