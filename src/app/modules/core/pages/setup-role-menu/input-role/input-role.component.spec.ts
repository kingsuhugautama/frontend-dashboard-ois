import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRoleComponent } from './input-role.component';

describe('InputRoleComponent', () => {
  let component: InputRoleComponent;
  let fixture: ComponentFixture<InputRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
