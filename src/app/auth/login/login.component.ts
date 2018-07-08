import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _toastr: ToastrService

  ) {
    this.loginForm = this._fb.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.email
      ])],
      'password': [null, Validators.required]
    });
   }

  ngOnInit() {
  }

  emailLogin() {

    const form = this.loginForm;
    const inputData = form.value;
    const isEmail = ValidationService.isEmail(inputData.email);

    if (form.valid && isEmail) {
      const user = inputData;
      this._auth.emailLogin(user).then(
        (data) => {
          localStorage.setItem('fhUser', JSON.stringify(data));
        }
      ).catch(
        (err: any) => {
          if (err.code === 'auth/invalid-email') {
            this._toastr.error('Por favor, digite um e-mail válido', 'Email inválido');
          }
          if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
            this._toastr.error('Usuário ou senha inválidos');
          }

          console.log(err);
        }
      );
    } else {
      if (!isEmail || !form.controls['email'].valid) {
        this._toastr.warning('Por favor, digite um e-mail válido', 'Email inválido');
      }
      if (!form.controls['password'].valid) {
        this._toastr.warning('A senha contém caractéres inválidos', 'Senha inválida');
      }
    }
  }

}
