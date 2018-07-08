import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  userData: any;
  notLogged: boolean;

  constructor(
    public _afAuth: AngularFireAuth,
    private _ActivatedRoute: ActivatedRoute,
    private _router: Router,
    public auth: AuthService
  ) {
   this.auth.user.subscribe(
    (data) => {
      this.userData = data;
    }
   );

   }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  redirectUser(isLogged: boolean) {
    if (isLogged) {
      this._router.navigate(['user', 'profile']);
    } else {
      this._router.navigate(['auth', 'login']);
    }
  }

  logOut() {
    this.auth.signOut()
      .then(
        () => console.log(this)
      );
  }

}
