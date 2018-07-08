import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';


export const ROUTES: Routes = [
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        redirectTo: 'auth/register',
        pathMatch: 'full'
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
