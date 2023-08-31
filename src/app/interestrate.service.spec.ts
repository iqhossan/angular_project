import { TestBed } from '@angular/core/testing';

import { InterestrateService } from './interestrate.service';

describe('InterestrateService', () => {
  let service: InterestrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
