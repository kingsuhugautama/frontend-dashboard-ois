import { TestBed } from '@angular/core/testing';

import { ExampleMasterService } from './example-master.service';

describe('ExampleMasterService', () => {
  let service: ExampleMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
