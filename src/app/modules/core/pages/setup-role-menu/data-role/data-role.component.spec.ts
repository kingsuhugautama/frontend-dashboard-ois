import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRoleComponent } from './data-role.component';

describe('DataRoleComponent', () => {
  let component: DataRoleComponent;
  let fixture: ComponentFixture<DataRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
