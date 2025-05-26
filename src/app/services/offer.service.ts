import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {offers} from '../../../mocks/offers';
import { Offer } from '../../../types/offer';

@Injectable({ providedIn: 'root' })
export class OfferService {
  getOffers(): Observable<Offer[]> {
    return of(offers);
  }
}

