import { Routes } from '@angular/router';
import { TournamentsComponent } from './features/tournaments/tournaments.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tournaments',
    pathMatch: 'full'
  },
  {
    path: 'tournaments',
    loadComponent: () =>
      import('./features/tournaments/tournaments.component').then(
        (m) => TournamentsComponent
      ),
  },
];
