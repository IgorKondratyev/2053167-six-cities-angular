import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {OfferPageComponent} from './offer-page/offer-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import { offersResolver } from './resolvers/offers.resolver';


export const routes: Routes = [
  { path: "", component: MainComponent,  resolve: { offers: offersResolver }},
  { path: "/login", component: LoginComponent},
  { path: "/favorites", component: FavoritesComponent},
  { path: "/offer/:id", component: OfferPageComponent},
  { path: "**", component: NotFoundPageComponent }
];
