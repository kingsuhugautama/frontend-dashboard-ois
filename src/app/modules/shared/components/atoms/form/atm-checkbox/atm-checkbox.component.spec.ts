import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmCheckboxComponent } from './atm-checkbox.component';

describe('AtmCheckboxComponent', () => {
  let component: AtmCheckboxComponent;
  let fixture: ComponentFixture<AtmCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
