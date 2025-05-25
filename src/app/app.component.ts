import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {offers} from '../../mocks/offers';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainComponent],
  template: `<app-main [offers]="offers" />`,
})
export class AppComponent {
  offers = offers;
}
