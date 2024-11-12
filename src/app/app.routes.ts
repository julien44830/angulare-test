import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'detail', component: DetailComponent }, // Page de détail
];
