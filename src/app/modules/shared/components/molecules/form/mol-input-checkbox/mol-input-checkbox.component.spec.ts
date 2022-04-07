import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputCheckboxComponent } from './mol-input-checkbox.component';

describe('MolInputCheckboxComponent', () => {
  let component: MolInputCheckboxComponent;
  let fixture: ComponentFixture<MolInputCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolInputCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
