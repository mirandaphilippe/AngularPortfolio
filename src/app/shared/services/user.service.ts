import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId: string;
  n: boolean;

  constructor(
    private _afAuth: AngularFireAuth,
    private _db: AngularFirestore,
    private _router: Router,
    private auth: AuthService
  ) {
    this._afAuth.authState.subscribe(user => {
      user ? this.userId = user.uid : this.n = false ;
    });
   }

  getUserProfile(uid) {
    const usersArr = this._db.collection('users', (ref) => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = ref.where('uid', '==', uid );
      return query;
    }).valueChanges();
    return usersArr;

    // this._db.firestore.collection('test').get()
    //   .then(ref => console.log(ref.docs, 'get'));
  }

  setUserProfile(profile) {
    const uid = this;
    const user_db$: AngularFirestoreDocument = this._db.doc(`users`);
    const profile_db$: AngularFirestoreDocument = this._db.doc(`profile/some`);

    if (this.auth.user) {

    }
  }
}
