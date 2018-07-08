import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const ROUTES: Routes = [
  {
    path: 'news',
    component: FeedComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: ':username/edit',
    component: EditProfileComponent
  }
];
