import { Routes } from '@angular/router';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { FormTournamentComponent } from './components/form-tournament/form-tournament.component';


export const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent,
    data: { pageTitle: 'Torneos', showInNavbar: true },
  },
  {
    path: 'create-tournament',
    component: FormTournamentComponent,
  }
];