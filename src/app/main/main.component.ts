import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '../../../types/offer';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, OfferComponent],
  templateUrl: './main.component.html'

})
export class MainComponent {
  @Input() offers: Offer[] = [];
}


