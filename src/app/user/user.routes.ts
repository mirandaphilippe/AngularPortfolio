import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const ROUTES: Routes = [
  {
    path: 'news',
    component: FeedComponent
  },
  {
    path: 'jobs',
    component: PortfolioComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
