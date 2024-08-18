import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTournamentComponent } from './card-tournament.component';

describe('CardTournamentComponent', () => {
  let component: CardTournamentComponent;
  let fixture: ComponentFixture<CardTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTournamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
