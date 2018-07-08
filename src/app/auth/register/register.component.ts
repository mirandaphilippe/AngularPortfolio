import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/services/validation.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message = {
    show: false,
    text: null
  };

  constructor(
    private _auth: AuthService,
    private _userService: UserService,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private _afAuth: AngularFireAuth
  ) {

      this.registerForm = this._fb.group({
        'username': [null, Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(16),
            Validators.pattern(/([a-z])\w/)
        ])],
        'email': [null, Validators.compose([
          Validators.required,
          Validators.email
        ])],
        'password': [null, Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ])],
        'confirmPassword': [null, Validators.required]
      });
   }

  ngOnInit() {

  }

  registerUser() {
    const form = this.registerForm;
    const userData = form.value;
    const isEmail = ValidationService.isEmail(userData.email);
    const isMatch = userData.password === userData.confirmPassword ? true : false;

    if (form.valid && isMatch && isEmail) {
     this._auth.emailRegisterUser(userData)
      .then(
      );
    } else {
      if (!isEmail || !form.controls['email'].valid) {
        this._toastr.warning('Por favor, digite um e-mail válido', 'Email inválido');
      }
      if (!form.controls['username'].valid) {
        this._toastr.warning('Por favor, digite um username válido', 'Username inválido');
      }
      if (!form.controls['password'].valid) {
        this._toastr.warning('A senha contém caractéres inválidos', 'Senha inválida');
      }
      if (!isMatch) {
        this._toastr.warning('As senhas não combinam', 'Confirmação de senha');
      }
    }
  }

}
