import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupRoleMenuComponent } from './setup-role-menu.component';

describe('SetupRoleMenuComponent', () => {
  let component: SetupRoleMenuComponent;
  let fixture: ComponentFixture<SetupRoleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupRoleMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupRoleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
