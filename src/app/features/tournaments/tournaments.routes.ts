import { Routes } from '@angular/router';
import { TournamentsComponent } from './components/tournaments/tournaments.component';


export const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent,
    data: { pageTitle: 'Torneos', showInNavbar: true },
  },
];