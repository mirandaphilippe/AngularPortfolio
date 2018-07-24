import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NotFoundComponent,
    CreateJobComponent
  ],
  providers: [
    AuthService,
    UserService
  ],
  exports: [
    NotFoundComponent,
    CreateJobComponent
  ]
})
export class SharedModule { }
