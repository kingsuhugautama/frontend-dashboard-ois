import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputNumericComponent } from './mol-input-numeric.component';

describe('MolInputNumericComponent', () => {
  let component: MolInputNumericComponent;
  let fixture: ComponentFixture<MolInputNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolInputNumericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolInputNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
