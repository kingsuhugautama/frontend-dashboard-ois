import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputDatepickerComponent } from './mol-input-datepicker.component';

describe('MolInputDatepickerComponent', () => {
  let component: MolInputDatepickerComponent;
  let fixture: ComponentFixture<MolInputDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolInputDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolInputDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
