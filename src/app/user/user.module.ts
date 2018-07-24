import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { UserService } from '../shared/services/user.service';
import { ROUTES } from './user.routes';

import { FeedComponent } from './feed/feed.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FeedComponent,
    PortfolioComponent,
    AboutComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
