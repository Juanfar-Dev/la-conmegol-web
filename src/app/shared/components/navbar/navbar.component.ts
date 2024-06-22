import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { slideAnimation, slideInOut } from '../../animations/slide.animation';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideToggle', [
      transition('* => *', [useAnimation(slideAnimation)]),
    ]),
    slideInOut
  ],
})
export class NavbarComponent {
  protected showMenu = signal(false);
  protected showUserMenu = signal(false);
  menuItems = input<any[]>();
  loggedUser = input<any>(false);
  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
