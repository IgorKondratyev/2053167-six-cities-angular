import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '../../../types/offer';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="cities__card place-card">
      <div *ngIf="offer.isPremium" class="place-card__mark">
        <span>Premium</span>
      </div>
      <div class="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            class="place-card__image"
            [src]="offer.previewImage"
            [alt]="offer.title"
            width="260"
            height="200"
          />
        </a>
      </div>
      <div class="place-card__info">
        <div class="place-card__price-wrapper">
          <div class="place-card__price">
            <b class="place-card__price-value">&euro;{{ offer.price }}</b>
            <span class="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button class="place-card__bookmark-button button" type="button">
            <svg class="place-card__bookmark-icon" width="18" height="19">
              <use xlink:href="#icon-bookmark"></use>
            </svg>
            <span class="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div class="place-card__rating rating">
          <div class="place-card__stars rating__stars">
            <span [style.width.%]="offer.rating * 20"></span>
            <span class="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 class="place-card__name">
          <a href="#">{{ offer.title }}</a>
        </h2>
        <p class="place-card__type">{{ offer.type }}</p>
      </div>
    </article>
  `,
})
export class OfferComponent {
  @Input() offer!: Offer;
}
