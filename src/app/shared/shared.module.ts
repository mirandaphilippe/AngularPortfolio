import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [
    NotFoundComponent,
    NavbarComponent
  ],
  providers: [
    AuthService,
    UserService
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
