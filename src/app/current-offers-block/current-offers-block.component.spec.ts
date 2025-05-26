import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOffersBlockComponent } from './current-offers-block.component';

describe('CurrentOffersBlockComponent', () => {
  let component: CurrentOffersBlockComponent;
  let fixture: ComponentFixture<CurrentOffersBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentOffersBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentOffersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
