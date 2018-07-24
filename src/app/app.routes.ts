import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CreateJobComponent } from './shared/components/create-job/create-job.component';


export const ROUTES: Routes = [
    {
        path: 'u',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        redirectTo: 'u/jobs',
        pathMatch: 'full'
    },
    {
        path: 'create',
        component: CreateJobComponent,
      },
    {
      path: 'notFound',
      component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: '/notFound'
    }
];
