import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { UserService } from '../shared/services/user.service';
import { ROUTES } from './user.routes';

import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FeedComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
