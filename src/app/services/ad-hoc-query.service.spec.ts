import { TestBed } from '@angular/core/testing';

import { AdHocQueryService } from './ad-hoc-query.service';

describe('AdHocQueryService', () => {
  let service: AdHocQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdHocQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
