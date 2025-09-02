import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ExploreComponent } from './pages/explore/explore.component';
import { MentorDetailsComponent } from './pages/mentor-details/mentor-details.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'explore', component: ExploreComponent },
  { path: 'mentor-details', component: MentorDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
