import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'la-conmegol-web';
  private route = inject(ActivatedRoute);

  constructor() {
    console.log(this.route.snapshot.data['title']);
  }

}
