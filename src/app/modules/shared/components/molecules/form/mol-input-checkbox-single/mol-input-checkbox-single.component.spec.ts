import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputCheckboxSingleComponent } from './mol-input-checkbox-single.component';

describe('MolInputCheckboxSingleComponent', () => {
  let component: MolInputCheckboxSingleComponent;
  let fixture: ComponentFixture<MolInputCheckboxSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolInputCheckboxSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolInputCheckboxSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
