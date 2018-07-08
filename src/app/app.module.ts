import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.fireConfig),
    AngularFireDatabaseModule,
    NgMaterialModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
