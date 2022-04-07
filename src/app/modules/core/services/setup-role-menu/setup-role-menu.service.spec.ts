import { TestBed } from '@angular/core/testing';

import { SetupRoleMenuService } from './setup-role-menu.service';

describe('SetupRoleMenuService', () => {
  let service: SetupRoleMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupRoleMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
