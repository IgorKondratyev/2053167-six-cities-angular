import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { offersResolver } from './offers.resolver';

describe('offersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => offersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
