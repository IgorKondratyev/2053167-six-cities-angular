import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { Offer } from '../../../types/offer';

export const offersResolver: ResolveFn<Offer[]> = () => {
  const offerService = inject(OfferService);
  return offerService.getOffers();
};

