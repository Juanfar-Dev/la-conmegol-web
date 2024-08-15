import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input, inject, input, signal } from '@angular/core';
import { slideAnimation, slideInOut } from '../../animations/slide.animation';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { NavigationService } from './services/navigation.service';

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
  currentRoute = '';
  title = '';

  @Input() pageTitle?: string;
  
  private navigation = inject(NavigationService);
  routes: Route[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {      
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  ngOnInit(): void {    
    this.routes = this.getRoutes();
    console.log(this.routes);
  }

  isActive(route: any): boolean {
    return this.currentRoute === route;
  }

  private getRoutes(): Route[] {
    return this.navigation.getNavigationRoutes();
  }
}
