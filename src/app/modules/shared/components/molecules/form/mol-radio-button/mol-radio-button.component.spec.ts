import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolRadioButtonComponent } from './mol-radio-button.component';

describe('MolRadioButtonComponent', () => {
  let component: MolRadioButtonComponent;
  let fixture: ComponentFixture<MolRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
