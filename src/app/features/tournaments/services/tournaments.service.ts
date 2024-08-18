import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tournament } from '../models/Tournament';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  constructor() {}

  getTournaments(): Observable<Tournament[]> {
    return of([
      {
        id: 1,
        name: 'Copa Navidad',
        status: 'active',
        remaining: 32,
        location: 'El Prat de llobregat, Cataluña',
        favorite: false,
        mode: 'grupos',
        teamsCount: 8,
      },
      {
        id: 2,
        name: 'Liga el Cañaveral',
        status: 'active',
        remaining: 142,
        location: 'El Cañaveral, Madrid',
        favorite: true,
        mode: 'liga',
        teamsCount: 24,
      },
      {
        id: 3,
        name: 'Liga el Cañaveral',
        status: 'active',
        remaining: 142,
        location: 'El Cañaveral, Madrid',
        favorite: true,
        mode: 'liga',
        teamsCount: 24,
      },
      {
        id: 4,
        name: 'Liga el Cañaveral',
        status: 'active',
        remaining: 142,
        location: 'El Cañaveral, Madrid',
        favorite: true,
        mode: 'liga',
        teamsCount: 24,
      },
      {
        id: 5,
        name: 'Liga el Cañaveral',
        status: 'active',
        remaining: 142,
        location: 'El Cañaveral, Madrid',
        favorite: true,
        mode: 'liga',
        teamsCount: 24,
      },
    ]);
  }
}
