import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tournaments',
    pathMatch: 'full',
  },
  {
    path: 'tournaments',
    title: 'Torneos',
    data: { pageTitle: 'Torneos', showInNavbar: true },
    loadChildren: () =>
      import('./features/tournaments/tournaments.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'teams',
    data: { pageTitle: 'Equipos', showInNavbar: true },
    loadComponent: () =>
      import('./features/teams/teams.component').then((c) => c.TeamsComponent),
  },
  {
    path: 'players',
    data: { pageTitle: 'Jugadores', showInNavbar: true },
    loadComponent: () =>
      import('./features/players/players.component').then(
        (c) => c.PlayersComponent
      ),
  },
];
