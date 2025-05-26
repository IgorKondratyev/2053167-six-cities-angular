import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Offer } from '../../../types/offer';
import {OfferComponent} from '../offer/offer.component';


@Component({
  selector: 'app-current-offers-block',
  imports: [OfferComponent, NgFor],
  templateUrl: './current-offers-block.component.html',
  styleUrl: './current-offers-block.component.css'
})
export class CurrentOffersBlockComponent {
  @Input() offers: Offer[] = [];
}
