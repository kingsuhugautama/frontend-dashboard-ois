import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmRadioButtonComponent } from './atm-radio-button.component';

describe('AtmRadioButtonComponent', () => {
  let component: AtmRadioButtonComponent;
  let fixture: ComponentFixture<AtmRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
