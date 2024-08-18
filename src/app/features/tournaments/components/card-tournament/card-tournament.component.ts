import { Component, input, OnInit } from '@angular/core';
import { Tournament } from '../../models/Tournament';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-tournament',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-tournament.component.html',
  styleUrl: './card-tournament.component.scss'
})
export class CardTournamentComponent implements OnInit {
  data = input<Tournament>();
  archived = false;
  statusClases!: string;
  favorite = false;
  favoriteClasess!: string;

  ngOnInit(): void {
    this.checkStatus();
    this.checkFav();
  }

  public checkStatus() {
    if (this.data()?.status === 'active') {
      this.statusClases = 'bg-green-400';
    } else if (this.data()?.status === 'archived') {
      this.archived = true;
      this.statusClases = 'bg-slate-300';
    } else {
      this.statusClases = 'bg-red-400';
    }
  }

  public checkFav() {
    if (this.data()?.favorite) {
      this.favorite = true;
      this.favoriteClasess = 'bg-slate-200 text-slate-600 outline-slate-200 hover:text-slate-400';
    } else {
      this.favorite = false;
      this.favoriteClasess = 'outline-slate-300 text-slate-300 hover:text-slate-400';
    }
  }

  public saveAsFav(id: number) {}

}
