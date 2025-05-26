import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  logout(): void {
   
    localStorage.removeItem('authToken');

 // src/app/components/main/main.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../../types/offer';
import { CurrentOffersBlockComponent } from '../current-offers-block/current-offers-block.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CurrentOffersBlockComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  offers: Offer[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.offers = this.route.snapshot.data['offers'];
  }

  signOut(): void {
    this.authService.logout();
  }

  goToFavorites(): void {
    this.router.navigate(['/favorites']);
  }
}
    this.router.navigate(['/login']);
  }
}
