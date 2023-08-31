import { TestBed } from '@angular/core/testing';

import { HandlingcostService } from './handlingcost.service';

describe('HandlingcostService', () => {
  let service: HandlingcostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlingcostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
