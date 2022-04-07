import { TestBed } from '@angular/core/testing';

import { UtilityHelperService } from './utility-helper.service';

describe('UtilityHelperService', () => {
  let service: UtilityHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
