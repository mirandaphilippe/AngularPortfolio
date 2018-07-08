import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { switchMap, mergeMap, tap, filter } from 'rxjs/operators';
import { UserAuth } from '../../shared/interfaces/userAuth.interface';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  $user: any;
  $profile: any;
  firstUser: boolean;

  constructor(
    private _user: UserService,
    private _auth: AuthService
  ) {
    this._auth.getCurrentUser().pipe(
      switchMap(user => {
        if (user.uid !== null && user.uid !== undefined) {
          return this._user.getUserProfile(user.uid);
        } else {
          return user;
        }
      })
    ).subscribe(user => {
      this.$user = user[0];
      if (user[0].profile) {
        this.$profile = user[0].profile;
      } else {
        this.firstUser = true;
      }
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
