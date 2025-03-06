import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
    { path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'memberships', loadComponent: () => import('./pages/memberships/memberships.component').then(m => m.MembershipsComponent) },
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: 'game', loadComponent: () => import('./pages/game/game.component').then(m => m.GameComponent) },
    { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)},
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
    { path: 'singup', loadComponent: () => import('./pages/singup/singup.component').then(m => m.SingupComponent) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
