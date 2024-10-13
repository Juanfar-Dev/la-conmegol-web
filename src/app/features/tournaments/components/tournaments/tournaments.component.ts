import { Component, inject, OnInit, signal } from '@angular/core';
import { CardTournamentComponent } from '../card-tournament/card-tournament.component';
import { TournamentsService } from '../../services/tournaments.service';
import { Tournament } from '../../models/Tournament';
import { firstValueFrom } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [
    RouterModule,
    CardTournamentComponent
  ],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss'
})
export class TournamentsComponent implements OnInit {
  private tournamentsService = inject(TournamentsService);

  public tournamentData = signal<Tournament[]>([])

  ngOnInit(): void {
    this.getTournaments();
  }

  async getTournaments() {
    this.tournamentData = signal(await firstValueFrom(this.tournamentsService.getTournaments()));
  }

}
